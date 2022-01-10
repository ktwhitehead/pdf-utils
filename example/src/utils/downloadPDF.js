const downloadPDF = (blob) => {
  // const blob = new Blob([response.data], {type: 'application/pdf'})
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = `your-file-name.pdf`
  link.click()
}

export default downloadPDF
