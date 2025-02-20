class Deparments {
  constructor(dname, hname, tstd) {
    this.dname = dname;
    this.headname = hname;
    this.totalstudnet = tstd;
  }
  uniname() {
    return "bok";
  }
}
class Innerdep extends Deparments {
  constructor(dname, hname, tstd, hod) {
    super(dname, hname, tstd);
    this.hod = hod;
    this.uname = this.uniname();
  }

  allinfo() {
    return `head of department: ${this.hod} uni name: ${this.uname} Department name: ${this.dname} Head name: ${this.headname} total students : ${this.totalstudnet}`;
  }
}

let csdepart = new Innerdep("bscs", "fawad", 500, "kashif");
console.log("cs: ", csdepart);

let mit = new Innerdep("mit", "fawad khan", 5000, "khdfhd fd");
console.log("mit: ", mit);
