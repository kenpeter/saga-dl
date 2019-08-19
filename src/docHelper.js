// destruct data
export function destructData(outData) {
    // expect starting at data:application/pdf;base64,xxxxxxxx
    const express = /:([^;]*);([^,]+),(.*)/g;
    const arr = express.exec(outData);
  
    const type = arr[1],
      encode = arr[2],
      data = arr[3];
  
    if (encode === 'base64') {
      return {type: type, encode: encode, data: data}; // e.g. application/pdf
    } else {
      // not base64, it can be 'text/csv', 'application/zip', etc
      return {type: 'unknown', encode: 'unknown', data: data};
    }
  }
  
  export function convertDataToBinary(dData) {
    if (dData.encode === 'base64') {
      const raw = window.atob(dData.data);
      const array = new Uint8Array(new ArrayBuffer(raw.length));
  
      for (let i = 0; i < raw.length; i++) {
        array[i] = raw.charCodeAt(i);
      }
      return array;
    } else {
      // not sure how to handle
    }
  }
  
  export function convertDataToBlob(data) {
    // destruct data
    const dData = destructData(data);
    // str to binary
    const arr = convertDataToBinary(dData);
    return new Blob([arr], {type: dData.type});
  }
  
  export const downloadDoc = (file, fileName) => {
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(file, fileName);
    } else {
      const downloadLink = document.createElement('a');
      // file is blob
      downloadLink.href = window.URL.createObjectURL(file);
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  