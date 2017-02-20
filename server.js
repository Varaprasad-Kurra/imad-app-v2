var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
   var articleOne=
         {
         title:'Article One - by Varam',
         Heading:'Article one',
         content:`
                   <p>
                "That so many of us are here today is a recognition that the threat from climate change is serious, it is urgent, and it is growing. Our generation's response to this challenge will be judged by history, for if we fail to meet it - boldly, swiftly, and together - we risk consigning future generations to an irreversible catastrophe."

                 These are the words President Obama used to begin his global warming speech before the United Nations Summit in 2009.

                 Search Google for global warming and you will get almost 65 million pages of results.
         
                  The subject has certainly drawn a lot of attention. But just what is global warming? What is causing it? What effects does it have on the earth and its inhabitants? What are some possible solutions? These are the questions that I will be addressing in this short, informative speech today.

                   What is Global Warming?

                 - See more at: http://www.best-speech-topics.com/global-warming-speech.html#sthash.BshW9YJb.dpuf 
        </p>  
                  
         };
var htmlTemplate={
             `
             <!DOCtype html>
<html>
    <head><title>Article-one IMAD</title></head>
    <h1>
    <a href='/' >Home</ a>
    </h1>
     <link href="/ui/style.css" rel="stylesheet" />
    <meta name="viewport" content="width-device-width" initial-scale-1 />
    <div class="container">
    <div>
        <p>My Fist Article</p>
    </div>
    <div>
       <p>
             "That so many of us are here today is a recognition that the threat from climate change is serious, it is urgent, and it is growing. Our generation's response to this challenge will be judged by history, for if we fail to meet it - boldly, swiftly, and together - we risk consigning future generations to an irreversible catastrophe."

             These are the words President Obama used to begin his global warming speech before the United Nations Summit in 2009.

             Search Google for global warming and you will get almost 65 million pages of results.
       
            The subject has certainly drawn a lot of attention. But just what is global warming? What is causing it? What effects does it have on the earth and its inhabitants? What are some possible solutions? These are the questions that I will be addressing in this short, informative speech today.

            What is Global Warming?

                 - See more at: http://www.best-speech-topics.com/global-warming-speech.html#sthash.BshW9YJb.dpuf 
        </p>  
        
    </div>
    </div>        
</html>
             
             `
}
app.get('/article-one',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui','article-one.html'));
});

app.get('/article-two',function(req,res) {
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});

app.get('/article-three',function(req,res) {
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});


app.get('/article-three',function(req,res) {
    res.send('Article three is selected and Server has handled it');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
