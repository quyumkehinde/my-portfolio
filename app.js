const toggle = () => {
            var menuNode = document.querySelector(".mobile-menu");
            if(menuNode.style.display == "none"){
                menuNode.style.display = "block";
                document.querySelector(".mobile-toggle:hover div:nth-child(1)").style.transform = "rotate(-45deg)";
                document.querySelector(".mobile-toggle:hover div:nth-child(3)").style.transform = "rotate(45deg)";
                document.querySelector(".mobile-toggle:hover div:nth-child(3)").style.margin = "-1px 0 0 0";
                document.querySelector(".mobile-toggle:hover div:nth-child(1)").style.margin = "0 0 -1px 0";
                document.querySelector(".mobile-toggle:hover div:nth-child(2)").style.display = "none";
            } else if (menuNode.style.display == "block") {
                document.querySelector(".mobile-toggle:hover div:nth-child(1)").style.transform = "rotate(0)";
                document.querySelector(".mobile-toggle:hover div:nth-child(3)").style.transform = "rotate(0)";
                document.querySelector(".mobile-toggle:hover div:nth-child(3)").style.margin = "3px 0";
                document.querySelector(".mobile-toggle:hover div:nth-child(1)").style.margin = "3px 0";
                document.querySelector(".mobile-toggle:hover div:nth-child(2)").style.display = "block";
                menuNode.style.display = "none";
            }
            
        }
    