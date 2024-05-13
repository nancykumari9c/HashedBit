/*Input

const students=[
    {student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.*/

const students = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

const output = students.map(student => {
    const scores = Object.values(student)[0];
    const sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
    const average = sum / Object.keys(scores).length;
    return { average: average };
});

console.log(output);