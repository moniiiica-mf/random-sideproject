import javax.swing.*;

String prompt(String s)
{
   println(s);
   String entry = JOptionPane.showInputDialog(s);
   if (entry == null)
      return null;
   println(entry);
   return entry;
}

String getString(String s)
{
   return prompt(s);
}

int getInt(String s)
{
   return Integer.parseInt(getString(s));
}

PImage img;
PImage img1;
PImage img2;
PImage img3;
PImage img4;
PImage img5;
PImage img6;
PImage img7;
PImage img8;
PImage img9;
PImage img10;
PImage img11;
PImage img12;
PImage img13;
PImage img14;
PImage img15;
PImage img16;
PImage img17;
PImage img18;
PImage img19;
PImage img20;
PImage img21;
PImage img22;
PImage img23;
PImage img24;
PImage img25;
PImage img26;
PImage img27;
PImage img28;
PImage img29;
PImage img30;
PImage img31;
PImage img32;
//Showcase
PImage img33;
PImage img34;
PImage img35;
PImage img36;
PImage img37;
PImage img38;
PImage img39;
PImage img40;
PImage img41;
PImage img42;
PImage img43;
PImage img44;
PImage img45;
PImage img46;
PImage img47;
PImage img48;
PImage img49;
PImage img50;
PImage img51;
PImage img52;
PImage img53;
PImage img54;
PImage img55;
PImage img56;
PImage img57;
PImage img58;
PImage img59;
PImage img60;
PImage img61;
PImage img62;
PImage img63;
PImage img64;
PImage img65;
PImage img66;

int info = 0;
int search = 0;

void setup() {
  frameRate(400);
  size(975,625);
  img = loadImage("Shoe 1.jpg");
  img1 = loadImage("Shoe 2.jpg");
  img2 = loadImage("Shoe 3.jpg");
  img3 = loadImage("Shoe 4.jpg");
  img4 = loadImage("Shoe 5.jpg");
  img5 = loadImage("Shoe 6.jpg");
  img6 = loadImage("Shoe 7.jpg");
  img7 = loadImage("Shoe 8.jpg");
  img8 = loadImage("Shoe 9.jpg");
  img9 = loadImage("Shoe 10.jpg");
  img10 = loadImage("Shoe 11.jpg");  
  img11 = loadImage("Shoe 12.jpg");
  img12 = loadImage("Shoe 13.jpg");  
  img13 = loadImage("Shoe 14.jpg");
  img14 = loadImage("Shoe 15.jpg");  
  img15 = loadImage("Shoe 16.jpg");
  img16 = loadImage("Shoe 17.jpg");  
  img17 = loadImage("Shoe 18.jpg");
  img18 = loadImage("Shoe 19.jpg");  
  img19 = loadImage("Shoe 20.jpg");
  img20 = loadImage("Shoe 21.jpg");  
  img21 = loadImage("Shoe 22.jpg");
  img22 = loadImage("Shoe 23.jpg");  
  img23 = loadImage("Shoe 24.jpg");
  img24 = loadImage("Shoe 25.jpg");  
  img25 = loadImage("Shoe 26.jpg");
  img26 = loadImage("Shoe 27.jpg");  
  img27 = loadImage("Shoe 28.jpg");
  img28 = loadImage("Shoe 29.jpg");
  img29 = loadImage("Shoe 30.jpg");
  img30 = loadImage("Search.jpg");
  img31 = loadImage("Input Image.jpg");
  img32 = loadImage("Setting.jpg");
  //Showcase
  img33 = loadImage("Showcase 1.jpg");
  img34 = loadImage("Showcase 2.jpg");
  img35 = loadImage("Showcase 3.jpg");
  img36 = loadImage("Showcase 4.jpg");
  img37 = loadImage("Showcase 5.jpg");
  img38 = loadImage("Showcase 6.jpg");
  img39 = loadImage("Showcase 7.jpg");
  img40 = loadImage("Showcase 8.jpg");
  img41 = loadImage("Showcase 9.jpg");
  img42 = loadImage("Showcase 10.jpg");
  img43 = loadImage("Showcase 11.jpg");
  img44 = loadImage("Showcase 12.jpg");
  img45 = loadImage("Showcase 13.jpg");
  img46 = loadImage("Showcase 14.jpg");
  img47 = loadImage("Showcase 15.jpg");
  img48 = loadImage("Showcase 16.jpg");
  img49 = loadImage("Showcase 17.jpg");
  img50 = loadImage("Showcase 18.jpg");
  img51 = loadImage("Showcase 19.jpg");
  img52 = loadImage("Showcase 20.jpg");
  img53 = loadImage("Showcase 21.jpg");
  img54 = loadImage("Showcase 22.jpg");
  img55 = loadImage("Showcase 23.jpg");
  img56 = loadImage("Showcase 24.jpg");
  img57 = loadImage("Showcase 25.jpg");
  img58 = loadImage("Showcase 26.jpg");
  img59 = loadImage("Showcase 27.jpg");
  img60 = loadImage("Showcase 28.jpg");
  img61 = loadImage("Showcase 29.jpg");
  img62 = loadImage("Showcase 30.jpg");
  img63 = loadImage("Asset 3.png");
  img64 = loadImage("Asset 1.png");
  img65 = loadImage("Asset 2.png");
  img66 = loadImage("Asset 4.png");
}

void draw() {
  if (info == 0){
  // landing page
    background(255);
    image(img63, 0, 0);
    fill(0); 
  } else if (info == -1){
    background( 241, 236, 230);
//Row 1
    image(img, 0, 25); //(100,25), (0, 125), (100, 125)
    image(img1, 0, 150); //(100, 150), (0, 250), (100,250)
    image(img2, 0, 275);//(100, 275), (0, 375), (100, 375)
    image(img3, 0, 400);//(100, 400), (0, 500), (100, 500)
//Row 2   
    image(img4, 125, 25);//(225, 25), (125, 125), (225, 125)
    image(img5, 125, 150);//(225, 150), (125, 250), (225, 250)
    image(img6, 125, 275);//(225, 275), (125, 375), (225, 375)
    image(img7, 125, 400);//(225, 400), (125, 500), (225, 500)
//Row 3    
    image(img8, 250, 25);//(350, 25), (250, 125), (350, 125)
    image(img9, 250, 150);//(350, 150), (250, 250), (350, 250)
    image(img10, 250, 275);//(350, 275), (250, 375), (350, 375)
    image(img11, 250, 400);//(350, 400), (250, 500), (350, 500)
//Row 4    
    image(img12, 375, 25);//(475, 25), (375, 125), (475, 125)
    image(img13, 375, 150);//(475, 150), (375, 250), (475, 250)
    image(img14, 375, 275);//(475, 275), (375, 375), (475, 375)
    image(img15, 375, 400);//(475, 400), (375, 500), (475, 500)
//Row 5
    image(img16, 500, 25);//(600, 25), (500, 125), (600, 125)
    image(img17, 500, 150);//(600, 150), (500, 250), (600, 250)
    image(img18, 500, 275);//(600, 275), (500, 375), (600, 375)
    image(img19, 500, 400);//(600, 400), (500, 500), (600, 500)
//Row 6    
    image(img20, 625, 25);//(725, 25), (625, 125), (725, 125)
    image(img21, 625, 150);//(725, 150), (627, 250), (725, 250)
    image(img22, 625, 275);//(725, 275), (625, 375), (725, 375)
    image(img23, 625, 400);//(725, 400), (625, 500), (725, 500)
//Row 7
    image(img24, 750, 25);//(850, 25), (750, 125), (850, 125)
    image(img25, 750, 150);//(850, 150), (750, 250), (850, 250)
    image(img26, 750, 275);//(850, 275), (750, 375), (850, 375)
    image(img27, 750, 400);//(850, 400), (750, 500), (850, 500)
//Row 8    
    image(img28, 0, 525);//(975, 625), (0, 525), (975, 625)
    image(img29, 125, 525);//(225, 625), (125, 525), (925, 625)
    image(img30, 875, 275);//(975, 275), (875, 375), (975, 375)
    image(img31, 875, 150);//(975, 250), (875, 150), (975, 250)
    image(img32, 875, 25);//(975, 25), (875, 125), (975, 125)
  }
  else if (info == 1){
    background(241, 236, 230);
    image(img45, 100, 100);
    textSize(20);
    text("Brand:Balenciaga", 525, 250); 
    text("Time Bought: 2020/01/12", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0); 
  }else if (info == 2){
    background(241, 236, 230);
    image(img46, 100, 100);
    textSize(20);
    text("Brand:Balenciaga", 525, 250); 
    text("Time Bought: 2019/02/02", 525, 300); 
    text("Colour: Pink", 525, 350); 
    fill(0);
}else if (info == 3){
    background(241, 236, 230);
    image(img47, 100, 100);
    textSize(20);
    text("Brand:Balenciaga", 525, 250); 
    text("Time Bought: 2019/3/31", 525, 300); 
    text("Colour: Bright Green", 525, 350); 
    fill(0);
}else if (info == 4){
    background(241, 236, 230);
    image(img48, 100, 100);
    textSize(20);
    text("Brand:Balenciaga", 525, 250); 
    text("Time Bought: 2021/01/14", 525, 300); 
    text("Colour: White", 525, 350); 
    fill(0);
//Row 1
}else if (info == 5){
    background(241, 236, 230);
    image(img49, 100, 100);
    textSize(20);
    text("Brand:Balenciaga", 525, 250); 
    text("Time Bought: 2021/03/30",525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 6){
    background(241, 236, 230);
    image(img50, 100, 100);
    textSize(20);
    text("Brand:Balenciaga", 525, 250); 
    text("Time Bought: 2019/01/29", 525, 300); 
    text("Colour: Red", 525, 350); 
    fill(0);
}else if (info == 7){
    background(241, 236, 230);
    image(img51, 100, 100);
    textSize(20);
    text("Brand:Balenciaga", 525, 250); 
    text("Time Bought: 2018/11/09", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 8){
    background(241, 236, 230);
    image(img52, 100, 100);
    textSize(20);
    text("Brand:Balenciaga", 525, 250); 
    text("Time Bought: 2020/09/30", 525, 300); 
    text("Colour: Black and White", 525, 350); 
    fill(0);
//Row 2
}else if (info == 9){
    background(241, 236, 230);
    image(img53, 100, 100);
    textSize(20);
    text("Brand:Jimmy Choo", 525, 250); 
    text("Time Bought: 2019/12/25", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 10){
    background(241, 236, 230);
    image(img54, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2021/08/16", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 11){
    background(241, 236, 230);
    image(img55, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2020/07/20", 525, 300); 
    text("Colour: Green", 525, 350); 
    fill(0);
}else if (info == 12){
    background(241, 236, 230);
    image(img56, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2020/05/28", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
//Row 3
}else if (info == 13){
    background(241, 236, 230);
    image(img57, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2019/04/15", 525, 300); 
    text("Colour: Black and White", 525, 350); 
    fill(0);
}else if (info == 14){
    background(241, 236, 230);
    image(img58, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2021/05/08", 525, 300); 
    text("Colour: White", 525, 350); 
    fill(0);
}else if (info == 15){
    background(241, 236, 230);
    image(img59, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2018/01/10", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 16){
    background(241, 236, 230);
    image(img60, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2022/05/20", 525, 300); 
    text("Colour: Brown and Black", 525, 350); 
    fill(0);
//Row 4
}else if (info == 17){
    background(241, 236, 230);
    image(img61, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2020/03/11", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 18){
    background(241, 236, 230);
    image(img62, 100, 100);
    textSize(20);
    text("Brand:YSL", 525, 250); 
    text("Time Bought: 2020/07/26", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 19){
    background(241, 236, 230);
    image(img33, 100, 100);
    textSize(20);
    text("Brand:Jimmy Choo", 525, 250); 
    text("Time Bought: 2019/10/10", 525, 300); 
    text("Colour: White", 525, 350); 
    fill(0);
}else if (info == 20){
    background(241, 236, 230);
    image(img34, 100, 100);
    textSize(20);
    text("Brand:Jimmy Choo", 525, 250); 
    text("Time Bought: 2022/06/23", 525, 300); 
    text("Colour: White", 525, 350); 
    fill(0);
//Row 5
}else if (info == 21){
    background(241, 236, 230);
    image(img35, 100, 100);
    textSize(20);
    text("Brand:Jimmy Choo", 525, 250); 
    text("Time Bought: 2018/04/28", 525, 300); 
    text("Colour: Pink and Silver", 525, 350); 
    fill(0);
}else if (info == 22){
    background(241, 236, 230);
    image(img36, 100, 100);
    textSize(20);
    text("Brand:Jimmy Choo", 525, 250); 
    text("Time Bought: 2021/02/28", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 23){
    background(241, 236, 230);
    image(img37, 100, 100);
    textSize(20);
    text("Brand:Dior", 525, 250); 
    text("Time Bought: 2018/12/17", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
}else if (info == 24){
    background(241, 236, 230);
    image(img38, 100, 100);
    textSize(20);
    text("Brand:Dior", 525, 250); 
    text("Time Bought: 2021/03/14", 525, 300); 
    text("Colour: Black", 525, 350); 
    fill(0);
//Row 6
}else if (info == 25){
    background(241, 236, 230);
    image(img39, 100, 100);
    textSize(20);
    text("Brand:Dior", 525, 250); 
    text("Time Bought: 2021/07/16", 525, 300); 
    text("Colour: Pink and White", 525, 350); 
    fill(0);
}else if (info == 26){
    background(241, 236, 230);
    image(img40, 100, 100);
    textSize(20);
    text("Brand:Dior", 525, 250); 
    text("Time Bought: 2022/08/23", 525, 300); 
    text("Colour: White", 525, 350); 
    fill(0);
}else if (info == 27){
    background(241, 236, 230);
    image(img41, 100, 100);
    textSize(20);
    text("Brand:Dior", 525, 250); 
    text("Time Bought: 2018/09/29", 525, 300); 
    text("Colour: Pink and White", 525, 350); 
    fill(0);
}else if (info == 28){
    background(241, 236, 230);
    image(img42, 100, 100);
    textSize(20);
    text("Brand:Dior", 525, 250); 
    text("Time Bought: 2019/12/22", 525, 300); 
    text("Colour: Dirty White", 525, 350); 
    fill(0);
//Row 7
}else if (info == 29){
    background(241, 236, 230);
    image(img43, 100, 100);
    textSize(20);
    text("Brand:Dior", 525, 250); 
    text("Time Bought: 2018/02/01", 525, 300); 
    text("Colour: Black and White", 525, 350); 
    fill(0);
}else if (info == 30){
    background(241, 236, 230);
    image(img44, 100, 100);
    textSize(20);
    text("Brand:Dior", 525, 250); 
    text("Time Bought: 2020/10/27", 525, 300); 
    text("Colour: Brown", 525, 350); 
    fill(0);
}else if (info == 31){
    println("info is currently 31");
    int id = getInt("Which shoes are you looking for?"); 
    info = id;
}else if (info == 32){
    background(241, 236, 230);
    image(img66, 100, 100);
    textSize(20);
    text("Welcome to Settings", 550, 250); 
    text("Are There Anything We Could Help You With?", 550, 300); 
    text("Yes:__________", 550, 350); 
    text("No:__________", 550, 400); 
    fill(0);
}else if (info == 33){
    background(241, 236, 230);
    image(img65, 100, 100);
    textSize(20);
    text("Imput New Shoes", 550, 250); 
    text("Brand Name:__________", 550, 300); 
    text("Time Bought:__________", 550, 350); 
    text("Colour:__________", 550, 400); 
    fill(0);
//Row 8
  }
}

void mouseClicked() {
  if (info != -1) {
    println("Initial value is "+info);
    info = -1;
  } else {
   if (mouseX >= 0 && mouseX <= 100 && mouseY >= 25 && mouseY <= 125){
      info = 1;
      println("Clicking on Image 1");
  } else if (mouseX >= 0 && mouseX <= 100 && mouseY >= 150 && mouseY <= 250){
  info = 2;
  println("Clicking on Image 2");
  } else if (mouseX >= 0 && mouseX <= 100 && mouseY >= 275 && mouseY <= 375){
  info = 3;
  println("Clicking on Image 3");
  } else if (mouseX >= 0 && mouseX <= 100 && mouseY >= 400 && mouseY <= 500){
  info = 4;
  println("Clicking on Image 4");
//Row 1
  } else if (mouseX >= 125 && mouseX <= 225 && mouseY >= 25 && mouseY <= 125){
  info = 5;
  println("Clicking on Image 5");
  } else if (mouseX >= 125 && mouseX <= 225 && mouseY >= 150 && mouseY <= 250){
  info = 6;
  println("Clicking on Image 6");
  } else if (mouseX >= 125 && mouseX <= 225 && mouseY >= 275 && mouseY <= 375){
  info = 7;
  println("Clicking on Image 7");
  } else if (mouseX >= 125 && mouseX <= 225 && mouseY >= 400 && mouseY <= 500){
  info = 8;
  println("Clicking on Image 8");
//Row 2
  } else if (mouseX >= 250 && mouseX <= 350 && mouseY >= 25 && mouseY <= 125){
  info = 9;
  println("Clicking on Image 9");
  } else if (mouseX >= 250 && mouseX <= 350 && mouseY >= 150 && mouseY <= 250){
  info = 10;
  println("Clicking on Image 10");
  } else if (mouseX >= 250 && mouseX <= 350 && mouseY >= 275 && mouseY <= 375){
  info = 11;
  println("Clicking on Image 11");
  } else if (mouseX >= 250 && mouseX <= 350 && mouseY >= 400 && mouseY <= 500){
  info = 12;
  println("Clicking on Image 12");
//Row 3
  } else if (mouseX >= 375 && mouseX <= 475 && mouseY >= 25 && mouseY <= 125){
  info = 13;
  println("Clicking on Image 13");
  } else if (mouseX >= 375 && mouseX <= 475 && mouseY >= 150 && mouseY <= 250){
  info = 14;
  println("Clicking on Image 14");
  } else if (mouseX >= 375 && mouseX <= 475 && mouseY >= 275 && mouseY <= 375){
  info = 15;
  println("Clicking on Image 15");
  } else if (mouseX >= 375 && mouseX <= 475 && mouseY >= 400 && mouseY <= 500){
  info = 16;
  println("Clicking on Image 16");
//Row 4
  } else if (mouseX >= 500 && mouseX <= 600 && mouseY >= 25 && mouseY <= 125){
  info = 17;
  println("Clicking on Image 17");
  } else if (mouseX >= 500 && mouseX <= 600 && mouseY >= 150 && mouseY <= 250){
  info = 18;
  println("Clicking on Image 18");
  } else if (mouseX >= 500 && mouseX <= 600 && mouseY >= 275 && mouseY <= 375){
  info = 19;
  println("Clicking on Image 19");
  } else if (mouseX >= 500 && mouseX <= 600 && mouseY >= 400 && mouseY <= 500){
  info = 20;
  println("Clicking on Image 20");
//Row 5
  } else if (mouseX >= 625 && mouseX <= 725 && mouseY >= 25 && mouseY <= 125){
  info = 21;
  println("Clicking on Image 21");
  } else if (mouseX >= 625 && mouseX <= 725 && mouseY >= 150 && mouseY <= 250){
  info = 22;
  println("Clicking on Image 22");
  } else if (mouseX >= 625 && mouseX <= 725 && mouseY >= 275 && mouseY <= 375){
  info = 23;
  println("Clicking on Image 23");
  } else if (mouseX >= 625 && mouseX <= 725 && mouseY >= 400 && mouseY <= 500){
  info = 24;
  println("Clicking on Image 24");
//Row 6
 } else if (mouseX >= 750 && mouseX <= 850 && mouseY >= 25 && mouseY <= 125){
  info = 25;
  println("Clicking on Image 25");
  } else if (mouseX >= 750 && mouseX <= 850 && mouseY >= 150 && mouseY <= 250){
  info = 26;
  println("Clicking on Image 26");
  } else if (mouseX >= 750 && mouseX <= 850 && mouseY >= 275 && mouseY <= 375){
  info = 27;
  println("Clicking on Image 27");
  } else if (mouseX >= 750 && mouseX <= 850 && mouseY >= 400 && mouseY <= 500){
  info = 28;
  println("Clicking on Image 28");
//Row 7
  } else if (mouseX >= 0 && mouseX <= 125 && mouseY >= 525 && mouseY <= 625){
  info = 29;
  println("Clicking on Image 29");
  } else if (mouseX >= 150 && mouseX <= 250 && mouseY >= 525 && mouseY <= 625){
  info = 30;
  println("Clicking on Image 30");
  } else if (mouseX >= 875 && mouseX <= 975 && mouseY >= 275 && mouseY <= 375){
  info = 31;
  background(241, 236, 230);
  image(img64, 100, 100);
  textSize(20);
  text("Click Search Button to Search", 550, 250); 
  fill(0);
  println("Clicking on Image 31");
  } else if (mouseX >= 875 && mouseX <= 975 && mouseY >= 25 && mouseY <= 125){
  info = 32;
  println("Clicking on Image 32");
  } else if (mouseX >= 875 && mouseX <= 975 && mouseY >= 150 && mouseY <= 250){
  info = 33;
  println("Clicking on Image 33");}
//Row 8
  }
}
