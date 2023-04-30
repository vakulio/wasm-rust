

async function init() {
    let rustApp = null

    try {
        rustApp = await import('../pkg')
    } catch (error) {
        console.error(error)
        return
    }

    console.log(rustApp)

    const input = document.getElementById('upload')
    const reader = new FileReader()

    reader.onloadend = () => {
        const base64 = reader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "")
        let img_data_url = rustApp.grayscale(base64)
        document.getElementById('new-img').setAttribute('src', img_data_url)
    }

    input.addEventListener('change', () => {
        
        const file = input.files[0]
        reader.readAsDataURL(file)
    
    })
}
init()