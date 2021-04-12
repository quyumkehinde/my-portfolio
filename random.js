
if(url.includes("order-received")){
    const node = document.querySelector(".woocommerce-order-overview.order_details");
    const orderId = document.querySelector(".woocommerce-order-overview.woocommerce-thankyou-order-details.order_details > li > strong").innerText;
    node.innerHTML = node.innerHTML + "<br><br><a href='https://api.whatsapp.com/send?phone=2349137296667&text=I%20just%20made%20an%20order%20on%20your%20website.%20My%20Order%20ID%20is%3A%20"+orderId+"' class='waBtn'>Complete Order On WhatsApp</a>";
}