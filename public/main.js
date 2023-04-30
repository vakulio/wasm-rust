function init() {
    const input = document.getElementById('upload')
    const reader = new FileReader()

    reader.onloadend = () => {
        const base64 = reader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "")
        console.log(base64)
    }

    input.addEventListener('change', () => {
        
        const file = input.files[0]
        reader.readAsDataURL(file)
    
    })
}
init()