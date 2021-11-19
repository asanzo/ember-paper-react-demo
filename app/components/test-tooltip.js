import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';


export default class TestTooltip extends Component {
  constructor() {
    super(...arguments);
  }

  @action
  tooltipBtnClick() {
    console.log('Tooltip btn clicked.');
  }


}






