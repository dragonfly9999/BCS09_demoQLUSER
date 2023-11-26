// Định nghĩa lớp Person
class Person {
  constructor(ho_ten, dia_chi, ma, email) {
    (this.ho_ten = ""), (this.dia_chi = "");
    this.ma = "";
    this.email = "";
  }
}

// Định nghĩa lớp Student kế thừa từ lớp Person
class Student extends Person {
  constructor(ho_ten, dia_chi, ma, email, toan, ly, hoa) {
    super(ho_ten, dia_chi, ma, email);
    this.toan = "";
    this.ly = "";
    this.hoa = "";
  }
}

// Định nghĩa lớp Employee kế thừa từ lớp Person
class Employee extends Person {
  constructor(ho_ten, dia_chi, ma, email, so_ngay_lam_viec, luong_theo_ngay) {
    super(ho_ten, dia_chi, ma, email);
    this.so_ngay_lam_viec = "";
    this.luong_theo_ngay = "";
  }
}

// Định nghĩa lớp Customer kế thừa từ lớp Person
class Customer extends Person {
  constructor(
    ho_ten,
    dia_chi,
    ma,
    email,
    ten_cong_ty,
    tri_gia_hoa_don,
    danh_gia
  ) {
    super(ho_ten, dia_chi, ma, email);
    this.ten_cong_ty = "";
    this.tri_gia_hoa_don = "";
    this.danh_gia = "";
  }
}
let checkCusom = new Customer();
console.log(checkCusom);

// Định nghĩa lớp ListPerson để quản lý danh sách các đối tượng
class ListPerson {
  constructor() {
    this.list_person = [];
  }

  themPerson(person) {
    this.list_person.push(person);
  }

  hienThiDanhSach() {
    for (let person of this.list_person) {
      console.log(
        `${person.ho_ten} - ${person.ma} - ${person.constructor.name}`
      );
    }
  }
}

