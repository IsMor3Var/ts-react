import { v4 as uuid } from 'uuid';

interface SeedBotonera {
  id: string;
  label: string;
  value: string;
}

export const SeedEqual: SeedBotonera = {
  id: uuid(),
  label: '=',
  value: '='
};

export const SeedAllClear: SeedBotonera = {
  id: uuid(),
  label: 'CE',
  value: 'CE'
};

export const SeedSigns: SeedBotonera[] = [
  {
    id: uuid(),
    label: '+',
    value: '+'
  },
  {
    id: uuid(),
    label: '-',
    value: '-'
  },
  {
    id: uuid(),
    label: 'x',
    value: 'x'
  },
  {
    id: uuid(),
    label: '÷',
    value: '÷'
  }
];

export const SeedNumbers: SeedBotonera[] = [
  {
    id: uuid(),
    label: '9',
    value: '9'
  },
  {
    id: uuid(),
    label: '8',
    value: '8'
  },
  {
    id: uuid(),
    label: '7',
    value: '7'
  },
  {
    id: uuid(),
    label: '6',
    value: '6'
  },
  {
    id: uuid(),
    label: '5',
    value: '5'
  },
  {
    id: uuid(),
    label: '4',
    value: '4'
  },
  {
    id: uuid(),
    label: '3',
    value: '3'
  },
  {
    id: uuid(),
    label: '2',
    value: '2'
  },
  {
    id: uuid(),
    label: '1',
    value: '1'
  },
  {
    id: uuid(),
    label: '0',
    value: '0'
  }
];
