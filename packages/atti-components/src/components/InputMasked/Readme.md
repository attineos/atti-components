InputMasked is a special sort of input that enforce some sort of mask to the user.

Basically it can be used to force the user to use a special format.

```
<Label>A date:</Label>
<InputMasked
  mask="99/99/9999"
  placeholder="25/12/2019"
/>

<Label>SSN:</Label>
<InputMasked
  mask="99-9999999"
  placeholder="00-9999999"
/>

<Label>Credit card:</Label>
<InputMasked
  mask="9999 9999 9999 9999"
  placeholder="0000 0000 0000"
/>
```
