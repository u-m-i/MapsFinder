extern crate jmespath;
extern crate serde_json;
extern crate serde;

use serde::{Serialize, Deserialize};
use serde_json::{from_reader};
use std::env::args;
use std::io::BufReader;
use std::fs::{File};

#[derive(Serialize, Deserialize, Debug)]
struct FrequentQuery {
  recorrido: Vec<String>,
  terminal: String
}

fn main() {
  /* Read the JSON */

  let input = args().collect::<Vec<String>>();

  if input.len() < 2 {
    println!("No file provided!");
    ()
  }

  let file: File = File::open(input[1].clone()).unwrap(); 

  let reader = BufReader::new(file);

  let json_data: Vec<FrequentQuery> = from_reader(reader).unwrap();

  println!("{:?}", json_data[0]);


  // let mut splitted: Vec<&str> = json_data.as_string().unwrap().rsplit('-').collect();

  // splitted.reverse();


  // ** Sort by
    // - empresa
    // - terminal

  // ** Split
  // ** Traverse - Encode
  // ** Test distance diff

  // println!("{:?}", splitted);

  ()
}

/* 
JMESPath Repository: https://github.com/jmespath/jmespath.rs
        Documentation: https://docs.rs/jmespath/latest/jmespath/
*/