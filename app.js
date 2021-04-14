Vue.component('login', {
    template:`
        <div>
            <div id="orderRequestInfo" class="grid grid-rows-4 grid-cols-1 gap-4">

                <div>
                <label for="requestUri" class="label block font-bold mb-1">Request URI</label>
                <input id="requestUri" type="text" class="border border-transparent shadow px-4 py-2 leading-normal text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline" />
                </div>

                <div>
                <label for="clientKey" class="label block font-bold mb-1">Client Key</label>
                <input id="clientKey" type="text" class="border border-transparent shadow px-4 py-2 leading-normal text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline" />
                </div>

                <div>
                <label for="secretKey" class="label block font-bold mb-1">Secret Key</label>
                <input id="secretKey" type="password" class="border border-transparent shadow px-4 py-2 leading-normal text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline" />
                </div>

                <div>
                <button id="btnLogin" type="button" class="rounded-full focus:outline-none focus:shadow-outline inline-flex mt-5 p-2 pl-3 pr-3 shadow bg-blue-800 text-white font-bold">Login</button>
                </div>

            </div>
        </div>
    `
});

Vue.component('requests', {
    template: `
        <div>        
            <div id="orderRequestInfo">
            
            <label for="orderId" class="label block font-bold mb-1">Order ID</label>
            <input id="orderId" type="text" class="border border-transparent shadow px-4 py-2 leading-normal text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline" />
            <button id="btnGetOrder" type="button" class="rounded-full focus:outline-none focus:shadow-outline inline-flex p-2 shadow bg-blue-800 text-white font-bold pl-2 pr-2 ml-3">Get</button>
            
            </div>   
            
            <div id="orderResponseInfo" class="flex gap-4 mt-5">  
            
            <div id="json-viewer" class="rounded bg-white w-max order-first p-3 flex-grow">
                JSON
            </div>  
            
            <div id="important-fields" class="rounded bg-white w-max order-last p-3 flex-grow">
                Important fields
            </div>
            
            </div>
        </div>
    `
})

let app = new Vue({
    el: '#app'
});