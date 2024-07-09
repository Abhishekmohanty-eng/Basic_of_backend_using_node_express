const express = require('express');
const app = express();
const port = 3000;

/*set-1
Question 1: 
Create an endpoint that takes a name as a query parameter and returns it in uppercase.
Declare an endpoint /shout using the get keyword.
Declare a variable name to take the input.
Convert the name to uppercase using the .toUpperCase() method.
Return the uppercase name as the result.
API Call: http://localhost:3000/shout?name=John
Expected Output: JOHN
Answer:
*/

app.get('/shout', (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            throw new Error('Name query parameter is required 1');
        }
        const upperCaseName = name.toUpperCase();
        res.send(upperCaseName);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 2:
Create an endpoint that takes firstName and lastName as query parameters and returns the full name.
Declare an endpoint fullname using the get keyword.
Declare two variables firstName and lastName to take the inputs.
Declare a variable fullName. Assign the full name to this variable by concatenating the inputs with a space.
Return the result.
API Call: http://localhost:3000/fullname?firstName=John&lastName=Doe
Expected Output: John Doe
Answer:
*/

app.get('/fullname', (req, res) => {
    try {
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;
        if (!firstName || !lastName) {
            throw new Error('Both firstName and lastName query parameters are required');
        }
        const fullName = `${firstName} ${lastName}`;
        res.send(fullName);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 3:
Create an endpoint that takes month and year as query parameters and returns a formatted date in the format 'Month, Year'.
Declare an endpoint date using the get keyword.
Declare two variables month and year to take the inputs.
Declare a variable formattedDate. Assign the formatted date to this variable by concatenating the inputs with a comma.
Return the result.
API Call: http://localhost:3000/date?month=Jan&year=2024
Expected Output: Jan, 2024
Answer:
*/

app.get('/date', (req, res) => {
    try {
        const month = req.query.month;
        const year = req.query.year;
        if (!month || !year) {
            throw new Error('Both month and year query parameters are required');
        }
        const formattedDate = `${month}, ${year}`;
        res.send(formattedDate);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 4:
Create an endpoint that takes a name as a query parameter and returns a greeting in the format 'Namaste, Name!'.
Declare an endpoint greet using the get keyword.
Declare a variable name to input the name.
Declare a variable greeting. Assign the greeting to this variable by concatenating the input name.
Return the result.
API Call: http://localhost:3000/greet?name=Tanay
Expected Output: Namaste, Tanay!
Answer:
*/

app.get('/greet', (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            throw new Error('Name query parameter is required 2');
        }
        const greeting = `Namaste, ${name}!`;
        res.send(greeting);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 5:
Create an endpoint that takes street, city, and state as query parameters and returns a formatted address.
Declare an endpoint address using the get keyword.
Declare three variables street, city, and state to take the inputs.
Declare a variable address. Assign the formatted address to this variable by concatenating the inputs with commas.
Return the result.
API Call: http://localhost:3000/address?street=123%20Main%20St&city=Springfield&state=IL
Expected Output: 123 Main St, Springfield, IL
Answer:
*/

app.get('/address', (req, res) => {
    try {
        const street = req.query.street;
        const city = req.query.city;
        const state = req.query.state;
        if (!street || !city || !state) {
            throw new Error('Street, city, and state query parameters are required');
        }
        const address = `${street}, ${city}, ${state}`;
        res.send(address);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 6:
Create an endpoint that takes username and domain as query parameters and returns a formatted email address.
Declare an endpoint email using the get keyword.
Declare two variables username and domain to take the inputs.
Declare a variable email. Assign the formatted email to this variable by concatenating the inputs with '@'.
Return the result.
API Call: http://localhost:3000/email?username=johndoe&domain=example.com
Expected Output: johndoe@example.com
Answer:
*/

app.get('/email', (req, res) => {
    try {
        const username = req.query.username;
        const domain = req.query.domain;
        if (!username || !domain) {
            throw new Error('Username and domain query parameters are required');
        }
        const email = `${username}@${domain}`;
        res.send(email);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


/*set-2
Question 1:
Create an endpoint that takes a name as a query parameter and returns it in lowercase.
Declare an endpoint whisper using the get keyword.
Declare a variable name.
Turn it into lowercase.
Return the result.
API Call: http://localhost:3000/whisper?name=John
Expected Output: john
Answer:
*/

app.get('/whisper', (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            throw new Error('Name query parameter is required 3');
        }
        const lowerCaseName = name.toLowerCase();
        res.send(lowerCaseName);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 2:
Create an endpoint that takes companyName and productName as query parameters and returns the full product name.
Declare an endpoint fullProductname using the get keyword.
Declare two variables companyName and productName to take the inputs.
Declare a variable fullProductName. Assign the full product name to this variable by concatenating the inputs with a space.
Return the result.
API Call: http://localhost:3000/full-product-name?companyName=Apple&productName=iPhone
Expected Output: Apple iPhone
Answer:
*/

app.get('/full-product-name', (req, res) => {
    try {
        const companyName = req.query.companyName;
        const productName = req.query.productName;
        if (!companyName || !productName) {
            throw new Error('Both companyName and productName query parameters are required');
        }
        const fullProductName = `${companyName} ${productName}`;
        res.send(fullProductName);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 3:
Create an endpoint that takes month and year as query parameters and returns a concatenated date in the format 'Month/Year'.
Declare an endpoint date using the get keyword.
Declare two variables month and year to take the inputs.
Declare a variable formattedDate. Assign the formatted date to this variable by concatenating the inputs with a slash (”/”).
Return the result.
API Call: http://localhost:3000/date/year?month=05&year=2024
Expected Output: 05/2024
Answer:
*/

app.get('/date/year', (req, res) => {
    try {
        const month = req.query.month;
        const year = req.query.year;
        if (!month || !year) {
            throw new Error('Both month and year query parameters are required');
        }
        const formattedDate = `${month}/${year}`;
        res.send(formattedDate);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Questions 4:
Create an endpoint that takes your home city as a query parameter and returns a greeting in the format 'You live in <city name>'.
Declare an endpoint greet using the get keyword.
Declare a variable city to input the home city.
Declare a variable greeting. Assign the greeting to this variable by concatenating the input home city.
Return the result.
API Call: http://localhost:3000/city?city=Kolkata
Expected Output: You live in Kolkata
Answers:
*/

app.get('/city', (req, res) => {
    try {
        const city = req.query.city;
        if (!city) {
            throw new Error('City query parameter is required');
        }
        const greeting = `You live in ${city}`;
        res.send(greeting);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Exercise 5:
Create an endpoint that takes capital, and country as query parameters and returns a formatted sentence in the format “[capital] is the capital of [country].”
Declare an endpoint capital using the get keyword.
Declare two variables capital and country to take the inputs.
Declare a variable countryCapital. Assign the formatted sentence to this variable. Eg., Delhi is the capital of India.
Return the result.
API Call: http://localhost:3000/capital?capital=Delhi&country=India
Expected Output: Delhi is the capital of India.
Answer:
*/

app.get('/capital', (req, res) => {
    try {
        const capital = req.query.capital;
        const country = req.query.country;
        if (!capital || !country) {
            throw new Error('Both capital and country query parameters are required');
        }
        const countryCapital = `${capital} is the capital of ${country}`;
        res.send(countryCapital);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Exercise 6:
Create an endpoint that takes firstName, lastName, and domain as query parameters and returns a formatted office email address.
Declare an endpoint email using the get keyword.
Declare three variables firstName, lastName, and domain to take the inputs.
Declare a variable email. Assign the formatted email to this variable. Eg. amanranjan@company.com.
Return the result.
API Call: http://localhost:3000/email_domin?firstName=aman&lastName=ranjan&domain=company.com
Expected Output: aman.ranjan@company.com
Answer:
*/

app.get('/email_domin', (req, res) => {
    try {
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;
        const domain = req.query.domain;
        if (!firstName || !lastName || !domain) {
            throw new Error('FirstName, lastName, and domain query parameters are required');
        }
        const email = `${firstName}.${lastName}@${domain}`;
        res.send(email);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


/* set-3
Question 1: Send a custom commit message
Declare 2 variables named type & message
type: Will represent the kind of commit. For example, feat, setup, docs, fix, etc
message: Will be a brief description summarising all the changes
To process requests, create an endpoint /custom-commit
Concatenate these variables in a format that will be later used as a standard for committing messages
API Call: http://localhost:3000/custom-commit?type=feat&message=Added%20new%20API%20endpoint
Expected Output: feat: Added new API endpoint
Answer:
*/

app.get('/custom-commit', (req, res) => {
    try {
        const type = req.query.type;
        const message = req.query.message;
        if (!type || !message) {
            throw new Error('Both type and message query parameters are required');
        }
        const commitMessage = `${type}: ${message}`;
        res.send(commitMessage);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 2: Generate certificate for students
Declare 3 variables named firstName, lastName & courseName
To process requests, create an endpoint /certificate
Use the values to generate a certificate for the student
API Call: http://localhost:3000/certificate?firstName=Amit&lastName=Ranjan&courseName=BytR
Expected Output: This certification is awarded to Amit Ranjan for completing the course BytR
Answer:
*/

app.get('/certificate', (req, res) => {
    try {
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;
        const courseName = req.query.courseName;
        if (!firstName || !lastName || !courseName) {
            throw new Error('FirstName, lastName, and courseName query parameters are required');
        }
        const certificate = `This certification is awarded to ${firstName} ${lastName} for completing the course ${courseName}`;
        res.send(certificate);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 3: Configure a custom out-of-office message
Declare 2 variables named startMonth & endMonth
To process requests, create an endpoint /autoreply
Use the values to send an automated message to anyone trying to get in touch with you
API Call: http://localhost:3000/autoreply?startMonth=May&endMonth=June
Expected Output: Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from May till June. Your enquiry will be resolved by another colleague.
Answer:
*/

app.get('/autoreply', (req, res) => {
    try {
        const startMonth = req.query.startMonth;
        const endMonth = req.query.endMonth;
        if (!startMonth || !endMonth) {
            throw new Error('StartMonth and endMonth query parameters are required');
        }
        const autoReplyMessage = `Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from ${startMonth} till ${endMonth}. Your enquiry will be resolved by another colleague.`;
        res.send(autoReplyMessage);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 4: Send a secure URL
Declare a variable domain
To process requests, create an endpoint /secureurl
Use the value to send a secure URL back to the user.
API Call: http://localhost:3000/secureurl?domain=app.invact.com
Expected Output: https://app.invact.com
Answer:
*/

app.get('/secureurl', (req, res) => {
    try {
        const domain = req.query.domain;
        if (!domain) {
            throw new Error('Domain query parameter is required');
        }
        const secureURL = `https://${domain}`;
        res.send(secureURL);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 5: Send a verification OTP
Declare a variable otpCode
To process requests, create an endpoint /sendotp
Use the value to send a verification OTP message
API Call: http://localhost:3000/sendotp?otpCode=1234
Expected Output: Your OTP for account verification is 1234. Do not share this with anyone
Answer:
*/

app.get('/sendotp', (req, res) => {
    try {
        const otpCode = req.query.otpCode;
        if (!otpCode) {
            throw new Error('OTP code query parameter is required');
        }
        const otpMessage = `Your OTP for account verification is ${otpCode}. Do not share this with anyone`;
        res.send(otpMessage);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 6: Send a welcome mail to new user
Declare 2 variables firstName & email
Make an endpoint /welcome to process the requests
Use the values to send a welcome text to the user
API Call: http://localhost:3000/welcome?firstName=Amit&email=amit@gmail.com
Expected Output: Hey Amit. We're excited to have you here, we'll send future notifications to your registered mail (amit@gmail.com)
Answer:
*/

app.get('/welcome', (req, res) => {
    try {
        const firstName = req.query.firstName;
        const email = req.query.email;
        if (!firstName || !email) {
            throw new Error('FirstName and email query parameters are required');
        }
        const welcomeMessage = `Hey ${firstName}. We're excited to have you here, we'll send future notifications to your registered mail (${email})`;
        res.send(welcomeMessage);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 7: Generate Github profile URL
Declare a variable username
Make an endpoint /github-profile to process the requests
Generate a Github profile URL by using the provided username
API Call: http://localhost:3000/github-profile?username=ankitkumar123
Expected Output: https://github.com/ankitkumar123
Answer:
*/

app.get('/github-profile', (req, res) => {
    try {
        const username = req.query.username;
        if (!username) {
            throw new Error('Username query parameter is required');
        }
        const githubProfileURL = `https://github.com/${username}`;
        res.send(githubProfileURL);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 8: Convert text into CSV row format
Declare variables named id, email, rollNumber
Make an endpoint /text-to-csv to process the requests
Using the provided values return a valid CSV row
API Call: http://localhost:3000/text-to-csv?id=1254&email=example@gmail.com&rollNumber=24
Expected Output: 1254, example@gmail.com, 24
Answer:
*/

app.get('/text-to-csv', (req, res) => {
    try {
        const id = req.query.id;
        const email = req.query.email;
        const rollNumber = req.query.rollNumber;
        if (!id || !email || !rollNumber) {
            throw new Error('Id, email, and rollNumber query parameters are required');
        }
        const csvRow = `${id}, ${email}, ${rollNumber}`;
        res.send(csvRow);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

