import { ref } from "vue";

class pageData {
  public lhNavBool = ref<string>("");
  constructor() {
    this.updateLhNavBool();
  }
  updateLhNavBool() {}
}

export default new pageData();
