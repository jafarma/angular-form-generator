import { ControlType, ValueBase } from './value-base';

export class TextboxValue extends ValueBase<string> {
  override controlType: ControlType = 'textbox';
  type: string;

  constructor(options: any = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
