/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var SingletonExample =  (function()
{
    var singleton_private_properties = 'Hello',
    singleton_private_method = function()
    {
        console.log('create single time object : Singleton object');
    }
    
    return{
        properties_pro : 'version',
        method_fun : function()
        {
            singleton_private_method();
            return singleton_private_properties;
        }
    }
}());

SingletonExample.method_fun();
