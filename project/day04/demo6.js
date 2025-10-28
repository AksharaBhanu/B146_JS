	    // 1. array 
            let a=[10,20,30];
            console.log(a);
            console.log(typeof a);
            console.log(Array.isArray(a));

		// 2. object (JSON object)
            let b={abc:123};
            console.log(b);
            console.log(typeof b);

		// 3. Set
            let c=new Set([10,20]);
            console.log(c);
            console.log(typeof c);
            console.log(c instanceof Set);

		// 4. Map
            let d=new Map([[10,20]]);
            console.log(d); 
            console.log(typeof d);
            console.log(d instanceof Map);

        //5
            d=null;
            console.log('**',d); //null
            console.log(typeof d);//object