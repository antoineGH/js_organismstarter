# JS Organism Checker.

## Table of contents

-   [General info](#general-info)
-   [Technologies](#technologies)
-   [Details](#setails)
-   [Setup](#setup)

## General info

### Context

You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

### Project Goals

This project allows to generate DNA samples sequences for P. aequor objects. Each specimen would have the possiblity to mutate, and compare DNA with a different specimen, able to check if it is likely to survive and if its DNA has a complement strand with another specimen's DNA sequence (matching Adenine with Thymine and Cytosine with Guanine).

## Details

### General Functions

-   returnRandBase()
-   mockUpStrand()
-   generateSample()

### Specimen Methods

-   mutate()
-   compareDNA()
-   willLikelySurvive()
-   complementStrand()

## Technologies

Project is created with:

-   JavaScript

## Setup

To run this project, clone it and start index.html

```
$ git clone https://github.com/antoineratat/js_organismstarter.git
$ cd js_organism-starter
$ node .\main.js
```
