/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
        "message": "Give your URL for the QR image",
        "name": "URL",
    },
  ])
  .then((answers) => {
    const url_name = answers.URL;
     
    var qr_svg = qr.image(url_name, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('my_qr_image.png'));

    fs.writeFile('qr_URL.txt', url_name, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


inquirer.the