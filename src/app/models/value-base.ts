export class ValueBase<T>{
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: ControlType;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: ControlType
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || 'none';
  }
}

export type ControlType = 'none' | 'textbox' | 'dropdown';
