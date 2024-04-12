
    const [file, setfile] = useState("")
 
// ----------------------------------------------------------------------------------------------------------------------------------------------------
    const uploadFile = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file); //upload file cha data
        formData.append('key', '9102cea065831e5dc8bd9efae25d937f'); //yata api key set kara imgbb cha 

        try {
            const response = await fetch('https://api.imgbb.com/1/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            //   ==========================================================================================================================
            //    get img url from here 

            setimg_url(data.data.url);

            //   ==========================================================================================================================

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

