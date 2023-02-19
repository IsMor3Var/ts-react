import { v4 as uuid } from 'uuid';

interface SeedBotonera {
  id: string;
  label: string;
  value: string;
  group: 'number' | 'operation' | 'n/a' | 'reset' | 'result';
}

export const BotoneraData: SeedBotonera[] = [
  {
    id: uuid(),
    label: 'CE',
    value: 'CE',
    group: 'reset'
  },
  {
    id: uuid(),
    label: '+',
    value: '+',
    group: 'operation'
  },
  {
    id: uuid(),
    label: '-',
    value: '-',
    group: 'operation'
  },
  {
    id: uuid(),
    label: 'x',
    value: 'x',
    group: 'operation'
  },
  {
    id: uuid(),
    label: '÷',
    value: '÷',
    group: 'operation'
  },
  {
    id: uuid(),
    label: '=',
    value: '=',
    group: 'result'
  },
  {
    id: uuid(),
    label: '0',
    value: '0',
    group: 'number'
  },
  {
    id: uuid(),
    label: '1',
    value: '1',
    group: 'number'
  },
  {
    id: uuid(),
    label: '2',
    value: '2',
    group: 'number'
  },
  {
    id: uuid(),
    label: '3',
    value: '3',
    group: 'number'
  },
  {
    id: uuid(),
    label: '4',
    value: '4',
    group: 'number'
  },
  {
    id: uuid(),
    label: '5',
    value: '5',
    group: 'number'
  },
  {
    id: uuid(),
    label: '6',
    value: '6',
    group: 'number'
  },
  {
    id: uuid(),
    label: '7',
    value: '7',
    group: 'number'
  },
  {
    id: uuid(),
    label: '8',
    value: '8',
    group: 'number'
  },
  {
    id: uuid(),
    label: '9',
    value: '9',
    group: 'number'
  }
];
