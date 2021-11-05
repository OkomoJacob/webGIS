# Web GIS
### List of Contents:
- [Web GIS](#web-gis)
    - [List of Contents:](#list-of-contents)
  - [TimeStamps](#timestamps)
  - [The WebGIS Starting Point](#the-webgis-starting-point)
    - [What is web mapping?](#what-is-web-mapping)
    - [Software used in this build](#software-used-in-this-build)
  - [Section I: Introduction to Web Technologies](#section-i-introduction-to-web-technologies)
    - [1.1 HTML](#11-html)
      - [Sample HTML5 Code snippet](#sample-html5-code-snippet)
    - [1.2 CSS](#12-css)
    - [1.3 Intro to Basic JavaScript](#13-intro-to-basic-javascript)
    - [1.4 Intercativity in JavaScript](#14-intercativity-in-javascript)
    - [1.5 Web Servers](#15-web-servers)
  - [Section II: Web Mapping with Leaflet](#section-ii-web-mapping-with-leaflet)
    - [2.1 Leaflet](#21-leaflet)
    - [2.2 GeoJSON](#22-geojson)
    - [2.3 Symbology and Interactivity](#23-symbology-and-interactivity)
  - [Section III: Databases](#section-iii-databases)
    - [3.1 Databases in general](#31-databases-in-general)
    - [3.2 Non-Spatial Queries](#32-non-spatial-queries)
    - [3.3 Spatial Queries](#33-spatial-queries)
  - [Section IV: Advanced Concepts](#section-iv-advanced-concepts)
    - [4.1 Client-Side Geoprocessing](#41-client-side-geoprocessing)
    - [4.2 Collaborative Mapping](#42-collaborative-mapping)
  - [Final Notes](#final-notes)
  - [Errata](#errata)
  - [More Related Articles/Resources](#more-related-articlesresources)
  - [Acknowledgements](#acknowledgements)

## TimeStamps
- 31
## The WebGIS Starting Point
### What is web mapping?
A web map is an interactive display of geographic information, in the form of a web page, that you can use to tell stories and answer questions in an interactive manner, unlike in the old stand alone Desktop GIS alone.Good to note is that a Web Map is fully powered by the web, rather than digital maps alone.
  ### Software used in this build
  <img src = "https://github.com/OkomoJacob/webGIS/blob/main/3.assets/softwares.png">

## Section I: Introduction to Web Technologies
### 1.1 HTML
- By definition HyperText Markup Language, conviniently known as HTML among many developers is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScrip, which we'll discuss in details in the succeeding sections.
- HTML is a data format used to encode the contents and structure of web pages. HTML is usually stored in plain text files with the `.html` file extension. Every time one accesses a web page, using a web browser, the respective HTML file for that web page is transferred and decoded into the visual image that we see on screen.
Simple web pages, such as the ones we build in this chapter, are composed of nothing but HTML code contained in a single `.html` file. 

- HTML code consists of [HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
<img src = "https://github.com/OkomoJacob/webGIS/blob/main/3.assets/htmlElement.png">

#### Sample HTML5 Code snippet
```html

<!DOCTYPE html>
    <html>
    <head>
        <title>My Map</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <!-- General Map information goes here -->
        <p>Your Maap Content will go here</P>
    </body>
</html>

```

### 1.2 CSS

### 1.3 Intro to Basic JavaScript
### 1.4 Intercativity in JavaScript
### 1.5 Web Servers 

## Section II: Web Mapping with Leaflet
### 2.1 Leaflet
### 2.2 GeoJSON
### 2.3 Symbology and Interactivity
  
## Section III: Databases
### 3.1 Databases in general
### 3.2 Non-Spatial Queries
### 3.3 Spatial Queries

## Section IV: Advanced Concepts
### 4.1 Client-Side Geoprocessing
### 4.2 Collaborative Mapping


## Final Notes

## Errata

## More Related Articles/Resources


## Acknowledgements
I thank the creators and contributors of the open-source tools used in this project repository, namely  <br> 
  * JQuery <br>
  * Leaflet <br>
  * Turf.js <br>
  * Leaflet.heat <br>
  * Leaflet.draw <br>

- The Original and significatly renowened author of the book _Introduction to Web Mapping_, [Michael Dorman](link), you deserve special recognition in this text.Thank you so much!

- This repo is based on the course _Introduction to JavaScript for Web Mapping_, given by the Department of Geography, Ben-Gurion University of the Negev.

- [Icons and Images](https://www.flaticon.com/)
