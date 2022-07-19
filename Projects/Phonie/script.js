function handleChange() {
  const inputBox = document.getElementById('inputBox');
  const inputValue = document.getElementById('phoneNumber').value.split('');
  const network = document.getElementById('networkProvider');

  console.log(inputValue);

  if (inputValue.length >= 4) {
    let firstFour = inputValue.splice(0, 4).join('');
    switch (checkNetwork(firstFour)) {
      case 'mtn':
        addNetwork(network, inputBox, 'mtn');
        return;
      case 'etisalat':
        addNetwork(network, inputBox, 'etisalat');
        return;
      case 'airtel':
        addNetwork(network, inputBox, 'airtel');
        return;
      case 'glo':
        addNetwork(network, inputBox, 'glo');
        return;
      default:
        return;
    }
  } else {
    resetInput(network, inputBox);
  }
}

// FUNCTIONS
function addNetwork(ntwkId, inputId, ntwk) {
  ntwkId.innerHTML = `<img src="images/${ntwk}.jpg" alt="${ntwk}" class="image" />`;
  ntwkId.classList.replace('gray', `${ntwk}`);
  inputId.classList.replace('gray', `${ntwk}`);
}

function resetInput(ntwkId, inputId) {
  // Reset Network Classes
  ntwkId.innerHTML = '';
  ntwkId.classList.remove('mtn', 'etisalat', 'airtel', 'glo');
  ntwkId.classList.add('gray');

  // Reset Input Classes
  inputId.classList.remove('mtn', 'etisalat', 'airtel', 'glo');
  inputId.classList.add('gray');
}

function checkNetwork(input) {
  const MTN = ['0806', '0803'],
    AIRTEL = ['0902'],
    ETISALAT = ['0809'],
    GLO = ['0815'];

  return MTN.includes(input)
    ? 'mtn'
    : ETISALAT.includes(input)
    ? 'etisalat'
    : AIRTEL.includes(input)
    ? 'airtel'
    : GLO.includes(input)
    ? 'glo'
    : null;
}
