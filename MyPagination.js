import React from 'react'
import { Pagination } from 'react-bootstrap';

const MyPagination = ({ totalPosts, PostPerPage, handlePagination }) => {
    let pageNumbers = [];
    let DOTS = '...';

    for (let i = 1; i <= Math.ceil(totalPosts / PostPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <>
            <nav>
                <ul className="paginationList">
                    {pageNumbers.map((numbers) => (
                        <li key={numbers} className="page-item">
                            <a onClick={() => handlePagination(numbers)} className='page-link'>{numbers}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            {<div className="paginationList">
                {pageNumbers.map((numbers) => (
                    <Pagination.Item >{numbers}</Pagination.Item>
                ))}
            </div>}
        </>
    )
}

export default MyPagination


// filter data by keys\

// filter by keys  and with entire value
    const search = (data) => {
        return data?.filter((items) => (
            dataKeys?.some((key) => items[key]?.toString().includes(query) || items[key]?.toString().toLowerCase().includes(query) || items[key]?.toString().toUpperCase().includes(query))
        ));
    }

    
    const expdate = '0421';
const expDateFormatter = expdate.replace(/\//g, "").substring(0, 2) + 
  (expdate.length > 2 ? '/' : '') + 
  expdate.replace(/\//g, "").substring(2, 4);
  
console.log(expDateFormatter)

<button onclick="open()" >open</button>

const timer =(sec)=> new Date().toLocaleTimeString().slice(13,19)
clg(timer)

export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
        {
            question:
                'Which function is used to serialize an object into a JSON string in Javascript?',
            choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'stringify()',
        },
        {
            question:
                'Which of the following keywords is used to define a variable in Javascript?',
            choices: ['var', 'let', 'var and let', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'var and let',
        },
        {
            question:
                'Which of the following methods can be used to display data in some form using Javascript?',
            choices: [
                'document.write()',
                'console.log()',
                'window.alert',
                'All of the above',
            ],
            type: 'MCQs',
            correctAnswer: 'All of the above',
        },
        {
            question: 'How can a datatype be declared to be a constant type?',
            choices: ['const', 'var', 'let', 'constant'],
            type: 'MCQs',
            correctAnswer: 'const',
        }
    ],
}


// date time 

// program to create a countdown timer

// time to countdown from (in milliseconds)
let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// countdown timer
let x = setInterval(function() {

    // get today's date and time in milliseconds
    let now = new Date().getTime();

    // find the interval between now and the countdown time
    let timeLeft = countDownDate - now;

    // time calculations for days, hours, minutes and seconds
    const days = Math.floor( timeLeft/(1000*60*60*24) );
    const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = Math.floor( (timeLeft/1000/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );

    // display the result in the element with id="demo"
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // clearing countdown when complete
    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
    }, 1000);


//     if (email === "") {
            toast.error("please enter your email...")
        } else if (!email.includes("@")) {
            toast.error("Please enter a valid email")
        } else if (password === "") {
            toast.error("please enter your password...")
        } else if (password.length < 6) {
            toast.error("password must be 6 char")
        } else {

            toast.success("you'r login successfully")
        }





