class Department {
  private employees: string[] = []; // private means only accessible within the class
  static fiscalYear = 2020; // static means accessible without instantiating the class

  constructor(private readonly id: string, public name: string) {
    // this.name = n; // this means the instance of the class
  }

  printName(): void {
    console.log(`Department name: ${this.name}`);
  }
}

const accounting = new Department("1", "Accounting");

// inheritance
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) return;

    this.addReport(value);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}
