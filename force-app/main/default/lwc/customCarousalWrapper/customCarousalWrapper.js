import { LightningElement } from 'lwc'
import mountain from '@salesforce/resourceUrl/mountain'
import Alone from '@salesforce/resourceUrl/Alone'
import logo from '@salesforce/resourceUrl/logo'
import tree from '@salesforce/resourceUrl/tree'
import monkey from '@salesforce/resourceUrl/monkey'
export default class CustomCarousalWrapper extends LightningElement {

       slides = [
              {
                     image: mountain,
                     heading: 'mountain',
                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. .'
              },
              {
                     image: Alone,
                     heading: 'Alone',
                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. .'
              },
              {
                     image: logo,
                     heading: 'logo',
                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. .'
              },
              {
                     image: monkey,
                     heading: 'Rahul',
                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. .'
              },
              {
                     image: tree,
                     heading: 'tree',
                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..'
              }
       ]
}