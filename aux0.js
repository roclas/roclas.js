var mergeRecursive=function (result, o2) {
  		for (var p in o2) {
    			try {
      					if ( typeof o2[p]=="object") {
        					result[p] = mergeRecursive(result[p], o2[p]);
      					} else {
        					result[p] = o2[p];
      					}
    			} catch(e) {
      					result[p] = o2[p];
    			}
  		}
  		return result;
}
	
var findRecursive=function (o,name,path,result) {
		var initial_length=result.length;
  		for (var p in o) {
      			if ( p.match(name)) { result[result.length]=path+p;
      			} else { if(typeof o[p]=="object")findRecursive(o[p],name,path+p+".",result); }
  		}
		if(initial_length==result.length)return [];
		return result;
}

var findInObject=function(o,name){return findRecursive(o,name,"",[]);}

 function printObject(o){
        result="";
        var isArray=(o instanceof Array);
        for(i in o){
                result+=(isArray?"":'"'+i+'":')+(typeof o[i]=="object"?printObject(o[i]):'"'+o[i]+'"')+",";
        }
        if(isArray)return "["+result.replace(/,$/,"")+"]";
        else return "{"+result.replace(/,$/,"")+"}";
      }

