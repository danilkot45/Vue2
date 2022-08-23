export default{
    bind(el,bindings){
        let i=0;
        let j=0;
        let dt=new Array("#0000A0", "#A00000", "#00A000", "#00A0A0", "#A000A0", "#A0A000");

        setInterval(() => {
            const arg = bindings.arg
            el.style[arg]=dt[i++];
            if ( i>dt.length) i=0;
        }, 300);

        let ft = new Array("40px","44px","48px","52px","56px","60px");

        const TextTitleFont = bindings.modifiers['font']
        if(TextTitleFont){
            setInterval(()=>{
              el.style.fontSize= ft[j++]
              if ( j>ft.length) j=0;
            },1500)      
        }

        const TextTitleHeight = bindings.modifiers['height']
        
        if(TextTitleHeight){
            el.style.height = bindings.value
        }
    }
}