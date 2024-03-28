import {
  FooterDivider,
  TextInput,
  Label,
  Select,
  Datepicker,
} from "flowbite-react";

export default function Enroll() {
  return (
    <div className="container mx-auto bg-white rounded-lg p-8 my-8 w-[80%]">
      <h1 className="uppercase text-center font-extrabold text-3xl pb-4">
        Enroll Form
      </h1>
      <div className="grid grid-cols-2 gap-12 w-full px-14 ">
        <div>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="fullname1"
                  value="Full name"
                  className="uppercase font-bold tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <TextInput
                id="fullname1"
                type="email"
                placeholder="Sanh Panha"
                required
              />
            </div>

            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="course"
                  value="gender"
                  className="font-bold uppercase tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <Select id="course" required>
                <option disabled selected>
                  Select Gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>
            </div>

            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="course"
                  value="date of birth"
                  className="font-bold uppercase tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <Datepicker weekStart={1} />
            </div>

            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="course"
                  value="place of birth"
                  className="font-bold uppercase tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <Select id="course" required>
                <div className="flex flex-col gap-7"></div>
                <option value="0" disabled selected>
                  Select province
                </option>
                <option value="1">Banteay Meanchey</option>
                <option value="2">Battambang</option>
                <option value="3">Kampong Cham</option>
                <option value="4">Kampong Chhnang</option>
                <option value="5">Kampong Speu</option>
                <option value="6">Kampong Thom</option>
                <option value="7">Kampot</option>
                <option value="8">Kandal</option>
                <option value="9">Koh Kong</option>
                <option value="10">Kratié</option>
                <option value="11">Mondulkiri</option>
                <option value="12">Oddar Meanchey</option>
                <option value="13">Pailin</option>
                <option value="14">Phnom Penh</option>
                <option value="15">Preah Vihear</option>
                <option value="16">Prey Veng</option>
                <option value="17">Pursat</option>
                <option value="18">Ratanakiri</option>
                <option value="19">Siem Reap</option>
                <option value="20">Sihanoukville</option>
                <option value="21">Stung Treng</option>
                <option value="22">Svay Rieng</option>
                <option value="23">Takéo</option>
                <option value="24">Tboung Khmum</option>
              </Select>
            </div>

            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="course"
                  value="current address"
                  className="font-bold uppercase tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <Select id="course" required>
                <option value="0" disabled selected>
                  Current Address
                </option>

                <option value="1">Boeng Keng Kang</option>
                <option value="2">Chamkar Mon</option>
                <option value="3">Chbar Ampov</option>
                <option value="4">Chroy Changvar</option>
                <option value="5">Dangkao</option>
                <option value="6">Daun Penh</option>
                <option value="7">Khan 7 Makara</option>
                <option value="8">Khan Meanchey</option>
                <option value="9">Khan Porsenchey</option>
                <option value="10">Khan Prek Pnov</option>
                <option value="11">Khan Russei Keo</option>
                <option value="12">Khan Sen Sok</option>
                <option value="13">Khan Tuol Kouk</option>
                <option value="14">Khan Dongkor</option>
              </Select>
            </div>
          </form>
        </div>

        <div>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="email"
                  className="uppercase font-bold tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="cstad@gmail.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="username3"
                  value="Phone Number"
                  className="uppercase font-bold tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <TextInput placeholder="123456789" addon="+855" required />
            </div>
            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="course"
                  value="education"
                  className="font-bold uppercase tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <Select id="course" required>
                <option value="0" disabled selected>
                  Select education
                </option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="2">Third Year</option>
                <option value="2">Fourth Year</option>
                <option value="2">Graduated</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="course"
                  value="university"
                  className="font-bold uppercase tracking-[.25em]"
                />
                <span className="text-red-500">*</span>
              </div>
              <Select id="course" required>
                <option value="0">Select university</option>
                <option value="1">ACLEDA Institute of Business</option>
                <option value="2">American University of Phnom Penh</option>
                <option value="3">Asia Euro University</option>
                <option value="4">Beltei International University</option>
                <option value="5">Build Bright University</option>
                <option value="7">Cambodian Mekong University</option>
                <option value="6">Cambodia University for Specialties</option>
                <option value="8">CamEd Business School</option>
                <option value="9">Chenla University</option>
                <option value="10">East Asia Management University</option>
                <option value="11">Economics and Finance Institute</option>
                <option value="12">Human Resources University</option>
                <option value="13">IIC University of Technology</option>
                <option value="14">Institute of Technology of Cambodia</option>
                <option value="15">International University</option>
                <option value="43">IT Academy STEP Cambodia</option>
                <option value="16">Khemarak University</option>
                <option value="17">
                  Limkokwing University of Creative Technology, Cambodia
                </option>
                <option value="18">National Institute of Business</option>
                <option value="19">National Institute of Education</option>
                <option value="20">
                  National Polytechnic Institute of Cambodia
                </option>
                <option value="21">National University of Management</option>
                <option value="22">Norton University</option>
                <option value="40">Other</option>
                <option value="23">Panha Chiet University</option>
                <option value="24">Paññasastra University of Cambodia</option>
                <option value="25">Paragon International University</option>
                <option value="26">Phnom Penh International University</option>
                <option value="27">
                  Preah Sihanouk Raja Buddhist University
                </option>
                <option value="28">
                  Prek Leap National College of Agriculture
                </option>
                <option value="29">Royal Academy of Cambodia</option>
                <option value="30">Royal University of Agriculture</option>
                <option value="31">Royal University of Fine Arts</option>
                <option value="32">
                  Royal University of Law and Economics
                </option>
                <option value="33">Royal University of Phnom Penh</option>
                <option value="41">Setec Institute</option>
                <option value="34">The University of Cambodia</option>
                <option value="35">University of Battambang</option>
                <option value="36">
                  University of Management and Economics
                </option>
                <option value="37">University of Puthisastra</option>
                <option value="38">Vanda Institute</option>
                <option value="39">Western University Cambodia</option>
                <option value="40">
                  Cambodia Academy of Digital Technology
                </option>
              </Select>
            </div>
          </form>
        </div>
      </div>
      {/*Line*/}
      <div className="w-[90%] mx-auto">
        <FooterDivider />
      </div>
      {/*Course*/}
      <div className="px-14">
        <div className="max-w-md">
          <div className="mb-2 block ">
            <Label
              htmlFor="course"
              value="COURSE"
              className="font-bold uppercase tracking-[.25em]"
            />
            <span className="text-red-500">*</span>
          </div>
          <Select id="course" required>
            <option value="0" disabled selected>
              Select Course
            </option>
            <option value="1">Flutter Mobile Development</option>
            <option value="2">iOS Development</option>
            <option value="3">SQL & Data Modeling with PostgreSQL</option>
            <option value="4">Web Design</option>
            <option value="5">DevOps Engineering</option>
            <option value="6">C++ Programming</option>
            <option value="7">Docker</option>
            <option value="8">Data Analytics</option>
            <option value="9">Android Development</option>
            <option value="10">NEXT.js</option>
            <option value="11">Linux Administrator</option>
            <option value="12">Spring Framework</option>
            <option value="13">Blockchain Development</option>
            <option value="14">Java Programming</option>
          </Select>
        </div>
        <div className="py-2 text-red-500 font-bold">
          <p className="text-danger instruction">
            <i className="fas fa-hand-point-right"></i>
            Please filter available courses to select the class..!
          </p>
        </div>
      </div>
      {/*Button*/}
      <div className="flex justify-end gap-4">
        <button className="w-40 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded uppercase">
          Cancel
        </button>
        <button
          type="submit"
          className="w-40 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded uppercase"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}
