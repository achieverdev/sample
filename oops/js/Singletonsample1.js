/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var singletonsample = (function()
{
    var propertis_access = "propties",
    singleton_method = function()
    {
        console.log('Please use my case');
    }
    
    return {
        propertis_use : "type",
        returnHere : function()
        {
            singleton_method();
            return propertis_access;
        }
    }
}
());

singletonsample.returnHere();