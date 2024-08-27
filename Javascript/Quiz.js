const HtmlQuizData = [
    {
        question: "คำถามที่ 1: การเริ่มต้นเอกสาร HTML ต้องใช้แท็กอะไร?",
        options: ["&lt;html&gt;", "&lt;head&gt;", "&lt;body&gt;", "&lt;meta&gt;"],
        answer: "&lt;html&gt;"
    },
    {
        question: "คำถามที่ 2: แท็กไหนที่ใช้สำหรับแสดงหัวข้อหลักสุดในเอกสาร HTML?",
        options: ["&lt;h1&gt;", "&lt;h2&gt;", "&lt;title&gt;", "&lt;header&gt;"],
        answer: "&lt;h1&gt;"
    },
    {
        question: "คำถามที่ 3: เพื่อเพิ่มลิงก์ไปยังเว็บไซต์อื่น ใช้แท็กอะไร?",
        options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;nav&gt;", "&lt;href&gt;"],
        answer: "&lt;a&gt;"
    },
    {
        question: "คำถามที่ 4: แท็กไหนที่ใช้สำหรับเพิ่มรูปภาพในหน้าเว็บ?",
        options: ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;", "&lt;photo&gt;"],
        answer: "&lt;img&gt;"
    },
    {
        question: "คำถามที่ 5: แท็กใดที่ใช้สำหรับสร้างรายการที่มีเลขลำดับ?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;dl&gt;"],
        answer: "&lt;ol&gt;"
    },
    {
        question: "คำถามที่ 6: แท็กไหนที่ใช้สำหรับเพิ่มข้อความย่อหน้าหรือเนื้อหาในเอกสาร?",
        options: ["&lt;p&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;section&gt;"],
        answer: "&lt;p&gt;"
    },
    {
        question: "คำถามที่ 7: สำหรับการกำหนดสไตล์ CSS ให้กับเอกสาร HTML ควรใช้แท็กไหน?",
        options: ["&lt;style&gt;", "&lt;css&gt;", "&lt;script&gt;", "&lt;link&gt;"],
        answer: "&lt;style&gt;"
    },
    {
        question: "คำถามที่ 8: แท็กไหนที่ใช้สำหรับการเพิ่มตารางในเอกสาร HTML?",
        options: ["&lt;table&gt;", "&lt;tab&gt;", "&lt;grid&gt;", "&lt;cell&gt;"],
        answer: "&lt;table&gt;"
    },
    {
        question: "คำถามที่ 9: แท็กไหนที่ใช้สำหรับแสดงข้อมูลแบบรายการที่ไม่มีเลขลำดับ?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;dl&gt;", "&lt;li&gt;"],
        answer: "&lt;ul&gt;"
    },
    {
        question: "คำถามที่ 10: แท็ก &lt;meta&gt; ใช้สำหรับอะไรในเอกสาร HTML?",
        options: ["การเพิ่มลิงก์ไปยังสไตล์ชีต", "การระบุข้อมูลเมตา เช่น ชื่อเอกสารและคำอธิบาย", "การแสดงภาพ", "การสร้างตาราง"],
        answer: "การระบุข้อมูลเมตา เช่น ชื่อเอกสารและคำอธิบาย"
    }
];

const CSSQuizData = [
    {
        question: "คำถามที่ 1: อะไรคือการเลือก CSS ที่ถูกต้องในการเปลี่ยนสีพื้นหลังของทั้งเอกสารเป็นสีฟ้า?",
        options: ["background-color: blue;", "color: blue;", "background: blue;", "bg-color: blue;"],
        answer: "background-color: blue;"
    },
    {
        question: "คำถามที่ 2: ถ้าต้องการเปลี่ยนขนาดตัวอักษรของข้อความเป็น 20 พิกเซล คำสั่ง CSS ที่ถูกต้องคืออะไร?",
        options: ["font-size: 20px;", "text-size: 20px;", "size: 20px;", "font: 20px;"],
        answer: "font-size: 20px;"
    },
    {
        question: "คำถามที่ 3: วิธีการสร้างกรอบ (border) หนา 1 พิกเซล สีดำ กับองค์ประกอบคืออะไร?",
        options: ["border: 1px solid black;", "border: 1px dashed black;", "border-color: black; border-width: 1px;", "border-style: solid; border-width: 1px; border-color: black;"],
        answer: "border: 1px solid black;"
    },
    {
        question: "คำถามที่ 4: อะไรคือการกำหนดระยะห่างระหว่างเนื้อหาในกล่องกับกรอบ (padding) 20 พิกเซล?",
        options: ["padding: 20px;", "margin: 20px;", "border-spacing: 20px;", "gap: 20px;"],
        answer: "padding: 20px;"
    },
    {
        question: "คำถามที่ 5: การใช้ display: flex; จะทำให้เอกสารมีลักษณะอย่างไร?",
        options: ["สร้างเลย์เอาต์แบบตาราง", "ทำให้สามารถจัดเรียงและจัดตำแหน่งองค์ประกอบได้อย่างยืดหยุ่น", "สร้างเลย์เอาต์แบบกริด", "เปลี่ยนลักษณะของตัวอักษร"],
        answer: "ทำให้สามารถจัดเรียงและจัดตำแหน่งองค์ประกอบได้อย่างยืดหยุ่น"
    },
    {
        question: "คำถามที่ 6: อะไรคือการตั้งค่าตำแหน่งขององค์ประกอบให้เป็นกลางในแนวนอน?",
        options: ["text-align: center;", "align-items: center;", "margin: 0 auto;", "justify-content: center;"],
        answer: "margin: 0 auto;"
    },
    {
        question: "คำถามที่ 7: วิธีการเปลี่ยนสีตัวอักษรของลิงก์ในสถานะ hover เป็นสีแดงคืออะไร?",
        options: ["a:hover { color: red; }", "a:hover { text-color: red; }", "a:hover { background-color: red; }", "a:hover { font-color: red; }"],
        answer: "a:hover { color: red; }"
    },
    {
        question: "คำถามที่ 8: การกำหนดระยะห่างระหว่างองค์ประกอบที่อยู่ข้างในกล่องกับกันและกัน (margin) 15 พิกเซล คำสั่งคืออะไร?",
        options: ["margin: 15px;", "padding: 15px;", "spacing: 15px;", "border-spacing: 15px;"],
        answer: "margin: 15px;"
    },
    {
        question: "คำถามที่ 9: วิธีการซ่อนองค์ประกอบโดยการไม่ให้มันแสดงผลและไม่ใช้พื้นที่ในเลย์เอาต์คืออะไร?",
        options: ["display: none;", "visibility: hidden;", "opacity: 0;", "position: absolute;"],
        answer: "display: none;"
    },
    {
        question: "คำถามที่ 10: การตั้งค่า position: absolute; จะทำให้ตำแหน่งขององค์ประกอบสัมพันธ์กับอะไร?",
        options: ["ตำแหน่งของเอกสาร", "ตำแหน่งขององค์ประกอบที่มี position: relative; ใกล้เคียงที่สุด", "ตำแหน่งของหน้าต่างเบราว์เซอร์", "ตำแหน่งของเอกสารทั้งหมด"],
        answer: "ตำแหน่งขององค์ประกอบที่มี position: relative; ใกล้เคียงที่สุด"
    }
];

const JavaScriptQuizData = [
    {
        question: "คำถาม 1: ใน JavaScript, ฟังก์ชัน `typeof` ใช้เพื่ออะไร?",
        options: ["ตรวจสอบชนิดของค่าที่อยู่ในตัวแปร", "เปลี่ยนประเภทของตัวแปร", "ลบตัวแปรออกจากหน่วยความจำ", "สร้างฟังก์ชันใหม่"],
        answer: "ตรวจสอบชนิดของค่าที่อยู่ในตัวแปร"
    },
    {
        question: "คำถาม 2: เมธอด `Array.prototype.filter` ทำงานอย่างไร?",
        options: ["คัดกรองค่าในอาเรย์ตามฟังก์ชันที่ให้และสร้างอาเรย์ใหม่ที่ประกอบด้วยค่าที่ตรงตามเงื่อนไข","แปลงค่าในอาเรย์เป็นอาเรย์ใหม่ตามฟังก์ชันที่ให้","รวมค่าทั้งหมดในอาเรย์เป็นค่าหนึ่งตามฟังก์ชันที่ให้","ลบค่าจากอาเรย์ตามฟังก์ชันที่ให้"],
        answer: "คัดกรองค่าในอาเรย์ตามฟังก์ชันที่ให้และสร้างอาเรย์ใหม่ที่ประกอบด้วยค่าที่ตรงตามเงื่อนไข"
    },
    {
        question: "คำถาม 3: ฟังก์ชัน `parseInt` ใช้สำหรับการอะไร?",
        options: ["แปลงข้อความเป็นจำนวนเต็ม", "แปลงจำนวนเต็มเป็นข้อความ", "ตรวจสอบว่าข้อความเป็นจำนวนเต็มหรือไม่", "แปลงตัวเลขเป็นฟังก์ชัน"],
        answer: "แปลงข้อความเป็นจำนวนเต็ม"
    },
    {
        question: "คำถาม 4: เมธอด `Array.prototype.forEach` ทำงานอย่างไร?",
        options: ["เรียกใช้ฟังก์ชันที่ให้กับทุกค่าของอาเรย์แต่ไม่สร้างอาเรย์ใหม่","แปลงค่าในอาเรย์เป็นอาเรย์ใหม่ตามฟังก์ชันที่ให้","รวมค่าทั้งหมดในอาเรย์เป็นค่าหนึ่งตามฟังก์ชันที่ให้","คัดกรองค่าในอาเรย์ตามฟังก์ชันที่ให้และสร้างอาเรย์ใหม่ที่ประกอบด้วยค่าที่ตรงตามเงื่อนไข"],
        answer: "เรียกใช้ฟังก์ชันที่ให้กับทุกค่าของอาเรย์แต่ไม่สร้างอาเรย์ใหม่"
    },
    {
        question: "คำถาม 5: `let` และ `var` แตกต่างกันอย่างไรใน JavaScript?",
        options: ["let มีขอบเขตบล็อก, var มีขอบเขตฟังก์ชัน", "var ใช้สำหรับค่าคงที่, let ใช้สำหรับตัวแปรที่เปลี่ยนแปลงได้", "let สามารถประกาศตัวแปรหลายตัวในบรรทัดเดียวกันได้, var ไม่ได้", "ไม่มีความแตกต่าง"],
        answer: "let มีขอบเขตบล็อก, var มีขอบเขตฟังก์ชัน"
    },
    {
        question: "คำถาม 6: เมธอด `Array.prototype.reduce` ทำงานอย่างไร?",
        options: ["รวมค่าทั้งหมดในอาเรย์เป็นค่าหนึ่งตามฟังก์ชันที่ให้","กรองค่าในอาเรย์ตามฟังก์ชันที่ให้","แปลงค่าในอาเรย์เป็นอาเรย์ใหม่ตามฟังก์ชันที่ให้","ค้นหาค่าที่ตรงตามเงื่อนไขในอาเรย์"],
        answer: "รวมค่าทั้งหมดในอาเรย์เป็นค่าหนึ่งตามฟังก์ชันที่ให้"
    },
    {
        question: "คำถาม 7: เมธอด `Array.prototype.map` ทำงานอย่างไร?",
        options: ["แปลงค่าในอาเรย์เป็นอาเรย์ใหม่ตามฟังก์ชันที่ให้", "ลบค่าจากอาเรย์ตามฟังก์ชันที่ให้", "หาผลรวมของค่าทั้งหมดในอาเรย์", "คัดลอกอาเรย์เป็นอาเรย์ใหม่"],
        answer: "แปลงค่าในอาเรย์เป็นอาเรย์ใหม่ตามฟังก์ชันที่ให้"
    },
    {
        question: "คำถาม 8: `null` และ `undefined` ต่างกันอย่างไร?",
        options: ["null เป็นการกำหนดค่าที่เป็น 'ไม่มีค่า', undefined หมายถึง 'ไม่กำหนดค่า'", "null หมายถึง 'ไม่กำหนดค่า', undefined เป็นการกำหนดค่าที่เป็น 'ไม่มีค่า'", "ไม่มีความแตกต่าง", "null เป็นประเภทข้อมูล, undefined เป็นฟังก์ชัน"],
        answer: "null เป็นการกำหนดค่าที่เป็น 'ไม่มีค่า', undefined หมายถึง 'ไม่กำหนดค่า'"
    },
    {
        question: "คำถาม 9: ฟังก์ชัน `setTimeout` ทำงานอย่างไร?",
        options: ["รันฟังก์ชันหลังจากเวลาที่กำหนด", "รันฟังก์ชันทันที", "ตั้งเวลาการทำงานของฟังก์ชัน", "หยุดการทำงานของฟังก์ชัน"],
        answer: "รันฟังก์ชันหลังจากเวลาที่กำหนด"
    },
    {
        question: "คำถาม 10: ผลลัพธ์ของโค้ดด้านล่างนี้คืออะไร? console.log(1 + '1');",
        options: ["2", "11", "'2'", "'11'"],
        answer: "'11'"
    }
];

// เลือกชุดข้อมูลคำถามตามชื่อไฟล์
const quizData = (function() {
    const path = window.location.pathname;
    if (path.includes('HTML-TEST.html')) {
        return HtmlQuizData;
    } else if (path.includes('CSS-TEST.html')) {
        return CSSQuizData;
    } else if (path.includes('JAVASCRIPT-TEST.html')) {
        return JavaScriptQuizData;
    }
})();

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizContainer.innerHTML = ''; // เคลียร์คำถามเก่า
    quizData.forEach((quiz, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-item');
        questionElement.innerHTML = `
            <h3>${quiz.question}</h3>
            ${quiz.options.map((option, i) => `
                <input type="radio" name="question${index}" id="q${index}o${i}" value="${option}">
                <label for="q${index}o${i}">${option}</label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateResult() {
    let score = 0;
    quizData.forEach((quiz, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === quiz.answer) {
            score++;
        }
    });
    resultContainer.innerHTML = `คะแนนของคุณ: ${score}/${quizData.length}`;
}

document.getElementById('submit').addEventListener('click', calculateResult);

// โหลดคำถามเมื่อเริ่มต้น
loadQuiz();

// const quizContainer = document.getElementById('quiz');
// const resultContainer = document.getElementById('result');

// function loadQuiz() {
//     quizData.forEach((quiz, index) => {
//         const questionElement = document.createElement('div');
//         questionElement.classList.add('quiz-item');
//         questionElement.innerHTML = `
//             <h3>${quiz.question}</h3>
//             ${quiz.options.map((option, i) => `
//                 <input type="radio" name="question${index}" id="q${index}o${i}" value="${option}">
//                 <label for="q${index}o${i}">${option}</label><br>
//             `).join('')}
//         `;
//         quizContainer.appendChild(questionElement);
//     });
// }

// function calculateResult() {
//     let score = 0;
//     quizData.forEach((quiz, index) => {
//         const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
//         if (selectedOption && selectedOption.value === quiz.answer) {
//             score++;
//         }
//     });
//     resultContainer.innerHTML = `คะแนนของคุณ: ${score}/${quizData.length}`;
// }

// document.getElementById('submit').addEventListener('click', calculateResult);

// loadQuiz();
