import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calculator, HelpCircle, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { tools } from '../toolsData';
import AdSensePlaceholder from './AdSensePlaceholder';
import AffiliateSection from './AffiliateSection';

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calculateINSS(salary: number): number {
  const faixas = [
    { limit: 1412.00, rate: 0.075 },
    { limit: 2666.68, rate: 0.09 },
    { limit: 4000.03, rate: 0.12 },
    { limit: 7786.02, rate: 0.14 },
  ];
  let inss = 0;
  let remaining = salary;
  let prevLimit = 0;
  for (const faixa of faixas) {
    const base = Math.min(remaining, faixa.limit - prevLimit);
    if (base > 0) {
      inss += base * faixa.rate;
      remaining -= base;
    }
    prevLimit = faixa.limit;
    if (remaining <= 0) break;
  }
  return Math.min(inss, 7786.02 * 0.14);
}

function calculateIRRF(base: number, dependents: number): number {
  const deducaoDependente = 189.59;
  const baseCalculo = Math.max(0, base - deducaoDependente * dependents);
  const faixas = [
    { limit: 2112.00, rate: 0, deduction: 0 },
    { limit: 2826.65, rate: 0.075, deduction: 158.40 },
    { limit: 3751.05, rate: 0.15, deduction: 370.40 },
    { limit: 4664.68, rate: 0.225, deduction: 651.73 },
    { limit: Infinity, rate: 0.275, deduction: 884.96 },
  ];
  for (const faixa of faixas) {
    if (baseCalculo <= faixa.limit) {
      return baseCalculo * faixa.rate - faixa.deduction;
    }
  }
  return 0;
}

function RescisaoCalculator() {
  const [salary, setSalary] = useState<number>(2500);
  const [hireDate, setHireDate] = useState('');
  const [termDate, setTermDate] = useState('');
  const [reason, setReason] = useState('sem-justa-causa');
  const [result, setResult] = useState<Record<string, number> | null>(null);

  function calc() {
    if (!hireDate || !termDate) return;
    const hire = new Date(hireDate);
    const term = new Date(termDate);
    const months = (term.getFullYear() - hire.getFullYear()) * 12 + (term.getMonth() - hire.getMonth());
    const daysInMonth = term.getDate() - hire.getDate();
    const totalMonths = months + (daysInMonth >= 15 ? 1 : 0);
    const proportional13th = (salary / 12) * Math.min(12, totalMonths);
    const proportionalVacation = (salary / 12) * Math.min(12, totalMonths);
    const vacationBonus = proportionalVacation / 3;
    const noticeDays = 30 + Math.max(0, Math.floor(totalMonths / 12)) * 3;
    const noticeValue = (salary / 30) * Math.min(noticeDays, 90);
    const salaryBalance = (salary / 30) * term.getDate();
    const fgtsBalance = salary * totalMonths * 0.08;
    const fgtsPenalty = reason === 'sem-justa-causa' ? fgtsBalance * 0.4 : reason === 'acordo' ? fgtsBalance * 0.2 : 0;

    setResult({
      'Saldo de Salário': salaryBalance,
      'Aviso Prévio': noticeValue,
      'Férias Proporcionais + 1/3': proportionalVacation + vacationBonus,
      '13º Salário Proporcional': proportional13th,
      'Multa FGTS': fgtsPenalty,
      'Total': salaryBalance + noticeValue + proportionalVacation + vacationBonus + proportional13th + fgtsPenalty,
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salário Bruto</label>
          <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Rescisão</label>
          <select className="input-field" value={reason} onChange={e => setReason(e.target.value)}>
            <option value="sem-justa-causa">Dispensa sem Justa Causa</option>
            <option value="pedido">Pedido de Demissão</option>
            <option value="acordo">Rescisão por Acordo</option>
            <option value="justa-causa">Dispensa por Justa Causa</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Data de Admissão</label>
          <input type="date" className="input-field" value={hireDate} onChange={e => setHireDate(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Data de Demissão</label>
          <input type="date" className="input-field" value={termDate} onChange={e => setTermDate(e.target.value)} />
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Rescisão</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className={`flex justify-between items-center py-2 px-3 rounded-lg ${key === 'Total' ? 'bg-primary-50 font-bold text-primary-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{key}</span>
              <span className="font-semibold">{formatBRL(value)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function HoraExtraCalculator() {
  const [salary, setSalary] = useState(2500);
  const [hours, setHours] = useState(220);
  const [extraHours, setExtraHours] = useState(10);
  const [extraPercent, setExtraPercent] = useState(50);
  const [result, setResult] = useState<Record<string, string | number> | null>(null);

  function calc() {
    const hourValue = salary / hours;
    const extraValue = hourValue * (1 + extraPercent / 100);
    const total = extraValue * extraHours;
    setResult({
      'Valor da Hora Normal': formatBRL(hourValue),
      'Valor da Hora Extra': formatBRL(extraValue),
      'Total a Receber': formatBRL(total),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salário Mensal</label>
          <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Carga Horária Mensal</label>
          <select className="input-field" value={hours} onChange={e => setHours(Number(e.target.value))}>
            <option value={220}>44h/semana (220h/mês)</option>
            <option value={200}>40h/semana (200h/mês)</option>
            <option value={180}>36h/semana (180h/mês)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Horas Extras no Mês</label>
          <input type="number" className="input-field" value={extraHours} onChange={e => setExtraHours(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adicional (%)</label>
          <select className="input-field" value={extraPercent} onChange={e => setExtraPercent(Number(e.target.value))}>
            <option value={50}>50% (dias úteis)</option>
            <option value={100}>100% (domingos/feriados)</option>
            <option value={80}>80% (convenção coletiva)</option>
          </select>
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Horas Extras</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-2 px-3 rounded-lg bg-gray-50">
              <span className="text-sm">{key}</span>
              <span className="font-semibold text-primary-700">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AdicionalNoturnoCalculator() {
  const [salary, setSalary] = useState(2500);
  const [hours, setHours] = useState(220);
  const [nightHours, setNightHours] = useState(30);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const hourValue = salary / hours;
    const nightValue = hourValue * 1.2;
    const reducedHours = nightHours * (60 / 52.5);
    const total = nightValue * reducedHours;
    setResult({
      'Valor Hora Normal': formatBRL(hourValue),
      'Valor Hora Noturna (+20%)': formatBRL(nightValue),
      'Horas Reduzidas (52min30s)': reducedHours.toFixed(1),
      'Total Adicional Noturno': formatBRL(total),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salário Mensal</label>
          <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Horas Noturnas no Mês</label>
          <input type="number" className="input-field" value={nightHours} onChange={e => setNightHours(Number(e.target.value))} />
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Adicional Noturno</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-2 px-3 rounded-lg bg-gray-50">
              <span className="text-sm">{key}</span>
              <span className="font-semibold text-primary-700">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function FeriasCalculator() {
  const [salary, setSalary] = useState(2500);
  const [sell, setSell] = useState(false);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const oneThird = salary / 3;
    const total = sell ? salary + oneThird + (salary / 3) : salary + oneThird;
    setResult({
      'Salário': formatBRL(salary),
      '1/3 Constitucional': formatBRL(oneThird),
      'Abono Pecuniário (opção)': sell ? formatBRL(salary / 3) : 'Não',
      'Total': formatBRL(total),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salário</label>
          <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vender 1/3 (Abono)?</label>
          <select className="input-field" value={sell ? 'sim' : 'nao'} onChange={e => setSell(e.target.value === 'sim')}>
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Férias</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className={`flex justify-between items-center py-2 px-3 rounded-lg ${key === 'Total' ? 'bg-primary-50 font-bold text-primary-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{key}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DecimoTerceiroCalculator() {
  const [salary, setSalary] = useState(2500);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const proportional = (salary / 12) * months;
    const inss = calculateINSS(proportional);
    const firstParcel = proportional / 2;
    const secondParcel = firstParcel - inss;
    setResult({
      '13º Proporcional': formatBRL(proportional),
      '1ª Parcela (sem descontos)': formatBRL(firstParcel),
      'Desconto INSS': formatBRL(inss),
      '2ª Parcela (líquida)': formatBRL(secondParcel),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salário</label>
          <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meses Trabalhados</label>
          <input type="number" min={1} max={12} className="input-field" value={months} onChange={e => setMonths(Math.min(12, Math.max(1, Number(e.target.value))))} />
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular 13º Salário</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-2 px-3 rounded-lg bg-gray-50">
              <span className="text-sm">{key}</span>
              <span className="font-semibold text-primary-700">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function FGTSCalculator() {
  const [salary, setSalary] = useState(2500);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const monthly = salary * 0.08;
    const total = monthly * months;
    const multa40 = total * 0.4;
    setResult({
      'Depósito Mensal (8%)': formatBRL(monthly),
      'Saldo Acumulado': formatBRL(total),
      'Multa 40% (dispensa s/justiça)': formatBRL(multa40),
      'Total c/ Multa': formatBRL(total + multa40),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salário</label>
          <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meses Trabalhados</label>
          <input type="number" min={1} className="input-field" value={months} onChange={e => setMonths(Number(e.target.value))} />
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular FGTS</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className={`flex justify-between items-center py-2 px-3 rounded-lg ${key === 'Total c/ Multa' ? 'bg-primary-50 font-bold text-primary-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{key}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function INSSCalculator() {
  const [salary, setSalary] = useState(3000);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const inss = calculateINSS(salary);
    const liquid = salary - inss;
    setResult({
      'Salário Bruto': formatBRL(salary),
      'Desconto INSS': formatBRL(inss),
      'Alíquota Efetiva': `${((inss / salary) * 100).toFixed(2)}%`,
      'Salário Líquido': formatBRL(liquid),
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Salário Bruto</label>
        <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular INSS</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className={`flex justify-between items-center py-2 px-3 rounded-lg ${key === 'Salário Líquido' ? 'bg-green-50 font-bold text-green-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{key}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SalarioLiquidoCalculator() {
  const [salary, setSalary] = useState(5000);
  const [dependents, setDependents] = useState(0);
  const [vt, setVt] = useState(0);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const inss = calculateINSS(salary);
    const baseIR = salary - inss;
    const irrf = calculateIRRF(baseIR, dependents);
    const vtDiscount = Math.min(vt, salary * 0.06);
    const liquid = salary - inss - irrf - vtDiscount;
    setResult({
      'Salário Bruto': formatBRL(salary),
      'INSS': formatBRL(inss),
      'IRRF': formatBRL(irrf),
      'Vale-Transporte': formatBRL(vtDiscount),
      'Salário Líquido': formatBRL(liquid),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salário Bruto</label>
          <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dependentes (IR)</label>
          <input type="number" min={0} className="input-field" value={dependents} onChange={e => setDependents(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vale-Transporte (R$)</label>
          <input type="number" className="input-field" value={vt} onChange={e => setVt(Number(e.target.value))} />
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Salário Líquido</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className={`flex justify-between items-center py-2 px-3 rounded-lg ${key === 'Salário Líquido' ? 'bg-green-50 font-bold text-green-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{key}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function JurosCompostosCalculator() {
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(1);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const r = rate / 100;
    let total = initial;
    let totalInvested = initial;
    for (let i = 0; i < months; i++) {
      total = total * (1 + r) + monthly;
      totalInvested += monthly;
    }
    const earnings = total - totalInvested;
    setResult({
      'Valor Total Investido': formatBRL(totalInvested),
      'Rendimentos': formatBRL(earnings),
      'Valor Final': formatBRL(total),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Valor Inicial</label>
          <input type="number" className="input-field" value={initial} onChange={e => setInitial(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Aporte Mensal</label>
          <input type="number" className="input-field" value={monthly} onChange={e => setMonthly(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Taxa (%) ao mês</label>
          <input type="number" step="0.1" className="input-field" value={rate} onChange={e => setRate(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Período (meses)</label>
          <input type="number" className="input-field" value={months} onChange={e => setMonths(Number(e.target.value))} />
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Juros Compostos</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className={`flex justify-between items-center py-2 px-3 rounded-lg ${key === 'Valor Final' ? 'bg-green-50 font-bold text-green-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{key}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PericulosidadeCalculator() {
  const [salary, setSalary] = useState(2500);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const adicional = salary * 0.3;
    setResult({
      'Salário Base': formatBRL(salary),
      'Adicional 30%': formatBRL(adicional),
      'Total': formatBRL(salary + adicional),
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Salário Base</label>
        <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Periculosidade</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className={`flex justify-between items-center py-2 px-3 rounded-lg ${key === 'Total' ? 'bg-primary-50 font-bold text-primary-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{key}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InsalubridadeCalculator() {
  const [degree, setDegree] = useState('medio');
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const salMin = 1512;
    const pct = degree === 'maximo' ? 0.4 : degree === 'medio' ? 0.2 : 0.1;
    const adicional = salMin * pct;
    setResult({
      'Salário Mínimo': formatBRL(salMin),
      'Grau': `${degree === 'maximo' ? 'Máximo' : degree === 'medio' ? 'Médio' : 'Mínimo'} (${(pct * 100).toFixed(0)}%)`,
      'Adicional': formatBRL(adicional),
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Grau de Insalubridade</label>
        <select className="input-field" value={degree} onChange={e => setDegree(e.target.value)}>
          <option value="maximo">Máximo (40%)</option>
          <option value="medio">Médio (20%)</option>
          <option value="minimo">Mínimo (10%)</option>
        </select>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Insalubridade</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-2 px-3 rounded-lg bg-gray-50">
              <span className="text-sm">{key}</span>
              <span className="font-semibold text-primary-700">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SeguroDesempregoCalculator() {
  const [avgSalary, setAvgSalary] = useState(2000);
  const [monthsWorked, setMonthsWorked] = useState(12);
  const [result, setResult] = useState<Record<string, string | number> | null>(null);

  function calc() {
    let parcelValue: number;
    if (avgSalary <= 2041.39) parcelValue = avgSalary * 0.8;
    else if (avgSalary <= 3402.65) parcelValue = 1633.11 + (avgSalary - 2041.39) * 0.5;
    else parcelValue = 2313.74;

    let parcelCount: number;
    if (monthsWorked >= 24) parcelCount = 5;
    else if (monthsWorked >= 12) parcelCount = 4;
    else parcelCount = 3;

    setResult({
      'Valor da Parcela': formatBRL(parcelValue),
      'Nº de Parcelas': parcelCount,
      'Total do Benefício': formatBRL(parcelValue * parcelCount),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Média Salarial (3 últimos meses)</label>
          <input type="number" className="input-field" value={avgSalary} onChange={e => setAvgSalary(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meses Trabalhados (últimos 36)</label>
          <input type="number" min={6} className="input-field" value={monthsWorked} onChange={e => setMonthsWorked(Number(e.target.value))} />
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Seguro-Desemprego</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className={`flex justify-between items-center py-2 px-3 rounded-lg ${key === 'Total do Benefício' ? 'bg-primary-50 font-bold text-primary-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{key}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MultaFGTSCalculator() {
  const [balance, setBalance] = useState(10000);
  const [type, setType] = useState('sem-justa-causa');
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const pct = type === 'sem-justa-causa' ? 0.4 : type === 'acordo' ? 0.2 : 0;
    const multa = balance * pct;
    setResult({
      'Saldo FGTS': formatBRL(balance),
      'Multa': formatBRL(multa),
      'Total a Receber': formatBRL(balance + multa),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Saldo do FGTS</label>
          <input type="number" className="input-field" value={balance} onChange={e => setBalance(Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
          <select className="input-field" value={type} onChange={e => setType(e.target.value)}>
            <option value="sem-justa-causa">Dispensa sem Justa Causa (40%)</option>
            <option value="acordo">Rescisão por Acordo (20%)</option>
          </select>
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Multa</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([k, v]) => (
            <div key={k} className={`flex justify-between items-center py-2 px-3 rounded-lg ${k === 'Total a Receber' ? 'bg-primary-50 font-bold text-primary-700' : 'bg-gray-50'}`}>
              <span className="text-sm">{k}</span>
              <span className="font-semibold">{v}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AvisoPrevioCalculator() {
  const [salary, setSalary] = useState(2500);
  const [years, setYears] = useState(3);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const days = Math.min(90, 30 + Math.max(0, years) * 3);
    const value = (salary / 30) * days;
    setResult({
      'Dias de Aviso Prévio': `${days} dias`,
      'Valor por Dia': formatBRL(salary / 30),
      'Valor Total': formatBRL(value),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Salário</label><input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Anos Trabalhados</label><input type="number" className="input-field" value={years} onChange={e => setYears(Number(e.target.value))} /></div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Aviso Prévio</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([k, v]) => (
            <div key={k} className={`flex justify-between items-center py-2 px-3 rounded-lg ${k === 'Valor Total' ? 'bg-primary-50 font-bold' : 'bg-gray-50'}`}><span className="text-sm">{k}</span><span className="font-semibold">{v}</span></div>
          ))}
        </div>
      )}
    </div>
  );
}

function ValeTransporteCalculator() {
  const [salary, setSalary] = useState(2500);
  const [cost, setCost] = useState(300);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const maxDiscount = salary * 0.06;
    const discount = Math.min(cost, maxDiscount);
    setResult({
      'Salário': formatBRL(salary),
      'Custo Transporte': formatBRL(cost),
      'Desconto Máximo (6%)': formatBRL(maxDiscount),
      'Desconto Aplicado': formatBRL(discount),
      'Empresa Cobre': formatBRL(cost - discount),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Salário</label><input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Custo Mensal Transporte</label><input type="number" className="input-field" value={cost} onChange={e => setCost(Number(e.target.value))} /></div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Vale-Transporte</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([k, v]) => (
            <div key={k} className="flex justify-between items-center py-2 px-3 rounded-lg bg-gray-50"><span className="text-sm">{k}</span><span className="font-semibold text-primary-700">{v}</span></div>
          ))}
        </div>
      )}
    </div>
  );
}

function CorrecaoMonetariaCalculator() {
  const [value, setValue] = useState(5000);
  const [months, setMonths] = useState(12);
  const [index, setIndex] = useState('ipca');
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const rates: Record<string, number> = { ipca: 0.0042, inpc: 0.0038, tr: 0.0001, poupanca: 0.005 };
  function calc() {
    const r = rates[index] || 0.0042;
    const corrected = value * Math.pow(1 + r, months);
    setResult({
      'Valor Original': formatBRL(value),
      'Índice': index.toUpperCase(),
      'Valor Corrigido': formatBRL(corrected),
      'Diferença': formatBRL(corrected - value),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Valor</label><input type="number" className="input-field" value={value} onChange={e => setValue(Number(e.target.value))} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Meses</label><input type="number" className="input-field" value={months} onChange={e => setMonths(Number(e.target.value))} /></div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Índice</label>
          <select className="input-field" value={index} onChange={e => setIndex(e.target.value)}>
            <option value="ipca">IPCA</option>
            <option value="inpc">INPC</option>
            <option value="tr">TR</option>
            <option value="poupanca">Poupança</option>
          </select>
        </div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Corrigir Valor</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([k, v]) => (
            <div key={k} className={`flex justify-between items-center py-2 px-3 rounded-lg ${k === 'Diferença' ? 'bg-primary-50 font-bold' : 'bg-gray-50'}`}><span className="text-sm">{k}</span><span className="font-semibold">{v}</span></div>
          ))}
        </div>
      )}
    </div>
  );
}

function DSRCalculator() {
  const [extraTotal, setExtraTotal] = useState(800);
  const [sundays, setSundays] = useState(4);
  const [weekdays, setWeekdays] = useState(26);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    if (weekdays === 0) return;
    const daily = extraTotal / weekdays;
    const dsrValue = daily * sundays;
    setResult({
      'Total Horas Extras/Comissões': formatBRL(extraTotal),
      'Dias Úteis': weekdays.toString(),
      'Domingos/Feriados': sundays.toString(),
      'DSR a Receber': formatBRL(dsrValue),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Total HE/Comissões</label><input type="number" className="input-field" value={extraTotal} onChange={e => setExtraTotal(Number(e.target.value))} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Dias Úteis</label><input type="number" className="input-field" value={weekdays} onChange={e => setWeekdays(Number(e.target.value))} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Dom/Feriados</label><input type="number" className="input-field" value={sundays} onChange={e => setSundays(Number(e.target.value))} /></div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular DSR</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([k, v]) => (
            <div key={k} className={`flex justify-between items-center py-2 px-3 rounded-lg ${k === 'DSR a Receber' ? 'bg-primary-50 font-bold' : 'bg-gray-50'}`}><span className="text-sm">{k}</span><span className="font-semibold">{v}</span></div>
          ))}
        </div>
      )}
    </div>
  );
}

function PLRCalculator() {
  const [salary, setSalary] = useState(3000);
  const [meta, setMeta] = useState(100);
  const [resultText, setResultText] = useState('');

  function calc() {
    const plr = salary * 0.3;
    setResultText(`PLR estimada: ${formatBRL(plr)} (30% do salário, valor comum em acordos coletivos).`);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Salário</label><input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">% Meta Atingida</label><input type="number" className="input-field" value={meta} onChange={e => setMeta(Number(e.target.value))} /></div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular PLR</button>
      {resultText && <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">{resultText}</div>}
    </div>
  );
}

function TransferenciaCalculator() {
  const [salary, setSalary] = useState(2500);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const adicional = salary * 0.25;
    setResult({
      'Salário Base': formatBRL(salary),
      'Adicional 25%': formatBRL(adicional),
      'Total com Adicional': formatBRL(salary + adicional),
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Salário</label>
        <input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} />
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular Transferência</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([k, v]) => (
            <div key={k} className={`flex justify-between items-center py-2 px-3 rounded-lg ${k === 'Total com Adicional' ? 'bg-primary-50 font-bold' : 'bg-gray-50'}`}>
              <span className="text-sm">{k}</span>
              <span className="font-semibold">{v}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function HoraExtraNoturnaCalculator() {
  const [salary, setSalary] = useState(2500);
  const [hours, setHours] = useState(220);
  const [nightExtra, setNightExtra] = useState(10);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  function calc() {
    const hourValue = salary / hours;
    const nightValue = hourValue * 1.2;
    const nightExtraValue = nightValue * 1.5;
    const total = nightExtraValue * nightExtra * (60 / 52.5);
    setResult({
      'Valor Hora Normal': formatBRL(hourValue),
      'Hora Noturna (+20%)': formatBRL(nightValue),
      'Hora Extra Noturna (+50%)': formatBRL(nightExtraValue),
      'Total a Receber': formatBRL(total),
    });
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Salário</label><input type="number" className="input-field" value={salary} onChange={e => setSalary(Number(e.target.value))} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Horas Extras Noturnas</label><input type="number" className="input-field" value={nightExtra} onChange={e => setNightExtra(Number(e.target.value))} /></div>
      </div>
      <button className="btn-primary w-full" onClick={calc}>Calcular</button>
      {result && (
        <div className="mt-4 space-y-2">
          {Object.entries(result).map(([k, v]) => (
            <div key={k} className={`flex justify-between items-center py-2 px-3 rounded-lg ${k === 'Total a Receber' ? 'bg-primary-50 font-bold' : 'bg-gray-50'}`}><span className="text-sm">{k}</span><span className="font-semibold">{v}</span></div>
          ))}
        </div>
      )}
    </div>
  );
}

const CALCULATORS: Record<string, React.FC> = {
  'rescisao': RescisaoCalculator,
  'hora-extra': HoraExtraCalculator,
  'adicional-noturno': AdicionalNoturnoCalculator,
  'ferias': FeriasCalculator,
  'decimo-terceiro': DecimoTerceiroCalculator,
  'fgts': FGTSCalculator,
  'multa-fgts': MultaFGTSCalculator,
  'aviso-previo': AvisoPrevioCalculator,
  'inss': INSSCalculator,
  'salario-liquido': SalarioLiquidoCalculator,
  'seguro-desemprego': SeguroDesempregoCalculator,
  'juros-compostos': JurosCompostosCalculator,
  'correcao-monetaria': CorrecaoMonetariaCalculator,
  'periculosidade': PericulosidadeCalculator,
  'insalubridade': InsalubridadeCalculator,
  'hora-extra-noturna': HoraExtraNoturnaCalculator,
  'dsr': DSRCalculator,
  'plr': PLRCalculator,
  'vale-transporte': ValeTransporteCalculator,
  'transferencia': TransferenciaCalculator,
};

export default function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = tools.find(t => t.id === toolId);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Calculator className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Ferramenta não encontrada</h1>
        <p className="text-gray-500 mb-6">A calculadora que você procura não existe ou foi movida.</p>
        <Link to="/" className="btn-primary">Voltar ao Início</Link>
      </div>
    );
  }

  const CalculatorComponent = CALCULATORS[tool.calculatorType];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Voltar
      </Link>

      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": tool.title,
            "description": tool.description,
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" }
          })}}
        />

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">{tool.category}</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">{tool.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{tool.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Calculadora</h2>
              {CalculatorComponent ? <CalculatorComponent /> : (
                <p className="text-gray-500 text-sm">Calculadora em breve disponível.</p>
              )}
            </div>

            <AdSensePlaceholder format="horizontal" className="mt-6" />

            <AffiliateSection toolId={tool.id} />

            <div className="mt-8 prose-custom">
              <h2>Sobre esta ferramenta</h2>
              {tool.longIntro.split('\n\n').map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <Lightbulb className="w-4 h-4 text-amber-500" /> Dicas
              </h3>
              <ul className="space-y-3">
                {tool.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <AdSensePlaceholder format="rectangle" />

            <div className="card">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <HelpCircle className="w-4 h-4 text-primary-500" /> Perguntas Frequentes
              </h3>
              <div className="space-y-2">
                {tool.questions.map((q, i) => (
                  <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-3 text-sm font-medium text-left text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    >
                      {q.question}
                      {faqOpen === i ? <ChevronUp className="w-4 h-4 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 flex-shrink-0" />}
                    </button>
                    {faqOpen === i && (
                      <div className="px-3 pb-3 text-sm text-gray-600">
                        {q.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
