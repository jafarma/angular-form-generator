import { ControlType, ValueBase } from "./value-base";

export class DropdownValue extends ValueBase<string> {
  override controlType: ControlType = 'dropdown';
  options: { key: string; value: string }[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options['options']  || [];
  }
}
