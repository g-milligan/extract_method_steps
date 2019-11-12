const outputToPage=(message)=>{
    var div = document.createElement("div");  
    div.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(div);
};

document.addEventListener('DOMContentLoaded', (event) => {
    
    outputToPage('javascript is working');

    ajaxPost('/samplepost', 
        (res)=>{
            outputToPage(res.message);
        },
        {message: 'POST message'}
    );

    ajaxGet('/sampleget',
        (res)=>{
            outputToPage(res.message);
        }
    );

});