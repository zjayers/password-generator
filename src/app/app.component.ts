import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  password = '';
  passwordLength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string) {
    this.passwordLength = parseInt(value);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    // Generate Password
    this.password = this.generatePassword();
  }

  shouldEnableButton(): boolean {
    return !(this.passwordLength && (this.includeLetters || this.includeNumbers || this.includeSymbols));
  }

  generatePassword(): string {

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    return generatedPassword;

  }

  toggleBool(bool: Boolean): void {
    bool = !bool;
  }
}
