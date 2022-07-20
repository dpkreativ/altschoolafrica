document.getElementById('phoneNumber').addEventListener('input', handleChange);

// ==== FUNCTIONS ==== //
function handleChange() {
  const inputBox = document.getElementById('inputBox');
  const inputValue = document.getElementById('phoneNumber').value.split('');
  const network = document.getElementById('networkProvider');

  if (inputValue.length >= 4) {
    let firstFour = inputValue.slice(0, 4).join('');
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

function addNetwork(ntwkId, inputId, ntwk) {
  ntwkId.innerHTML = `<img src="images/${ntwk}.jpg" alt="${ntwk}" class="image" />`;
  ntwkId.classList.replace('gray', `${ntwk}`);
  inputId.classList.replace('gray', `${ntwk}`);
}

function resetInput(ntwkId, inputId) {
  // Reset Network
  ntwkId.innerHTML = '';
  ntwkId.classList.remove('mtn', 'etisalat', 'airtel', 'glo');
  ntwkId.classList.add('gray');

  // Reset Input
  inputId.classList.remove('mtn', 'etisalat', 'airtel', 'glo');
  inputId.classList.add('gray');
}

function checkNetwork(input) {
  const MTN = [
      '0703',
      '0706',
      '0803',
      '0806',
      '0810',
      '0813',
      '0814',
      '0816',
      '0903',
      '0906',
      '0913',
      '0916',
    ],
    AIRTEL = [
      '0701',
      '0708',
      '0802',
      '0808',
      '0812',
      '0901',
      '0902',
      '0904',
      '0907',
      '0912',
    ],
    ETISALAT = ['0809', '0817', '0818', '0909', '0908'],
    GLO = ['0705', '0805', '0807', '0811', '0815', '0905', '0915'];

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
