({
    doInitHelper : function(component) {
        var action = component.get("c.getMaterialsList");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.materialsList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    
    handleSuccessHelper: function(component) {
        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Produto adicionado!",
            "message": "Seu produto foi adicionado à lista de compras com sucesso.",
            "type": "success"
        });
        toastEvent.fire();
        
        var action = component.get("c.getMaterialsList");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.materialsList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    
    handleResetHelper: function(component) {
        component.find('field').forEach(function(f) {
            f.reset();
        });
    }
})
