class parent {
  Assets1() {
    console.log("This first generation assets!");
  }
  Assets2() {
    console.log("This 2nd  generation assets!");
  }
}

class child extends parent {
  //   MyAssets() {
  //     super.Assets1();
  //     super.Assets2();
  //   }
}
let MyAssets = new child();
MyAssets.Assets1();
MyAssets.Assets2();
