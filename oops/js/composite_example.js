/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//add
//remove
//getChild
//hide
//show
//getElement
var GalleryComposite = function(heading, id)
{
    this.child = [];
    this.element = $('<div id="' + id + '" class="composite-gallery"></div>') .append('<h2>' + heading + '</h2>');
    this.infoElement = $('<div id="'+ id + '" class="composite-gallery"></div>').append('<h2>' + heading + '</h2>');
}

GalleryComposite.prototype = {
    add : function (child)
    {
        this.child.push(child);
        this.element.append();
    },
    
    remove : function (child)
    {
         for (var node, i = 0; node = this.getChild(i); i++) 
         {
             if (node == child) 
             {
                 this.children.splice(i, 1); 
                 this.element.detach(child.getElement()); 
                 return true;
             }
             if (node.remove(child))
             { 
                 return true;
             }
         }
         return false;
    },
    
    getChild :  function(i)
    {
         return this.children[i];
    },
    
    hide : function()
    {
         for (var node, i = 0; node = this.getChild(i); i++) 
         {
             node.hide();
         }
         this.element.hide(0);
    },
    
    show : function()
    {
        for (var node, i = 0; node = this.getChild(i); i++)
        {
            node.show(); 
        } 
        this.element.show(0);
    },
    
    getElement : function()
    {
         return this.element;
    }    
}