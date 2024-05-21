const firstName = "Teja";
const lastName = "Nayak";
const fullName = `${firstName} ${lastName}`;
const skills = ["HTML", "CSS", "JS"];
const address = "Hyderabad";
const designation = "React Developer";
const company = "Trangla";
const monthlySalary = 35000;

// Calculate salary
const calculateSalary = (monthlySalary) => monthlySalary * 12;

const annualSalary = calculateSalary(monthlySalary);

const UserBio = (firstName, lastName, address, designation, company, annualSalary) => {
    return `${firstName} ${lastName} living near ${address} and working as ${designation} for ${company}, earning around ${annualSalary} per year.`;
};


// Output
const output = UserBio(firstName, lastName, address, designation, company, annualSalary);
console.log(output);
console.log(`Skills: ${skills}`);
