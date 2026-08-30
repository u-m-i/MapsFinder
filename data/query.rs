extern crate jmespath;
extern crate serde_json;

use serde_json::{Value, from_reader};
use std::env::args;
use std::io::BufReader;
use std::fs::{File};

fn enquire(expression: jmespath::Expression, target: Value ) -> jmespath::SearchResult {
  return Ok(expression.search(target).unwrap())
}

// fn geocoding() {}

const FILTER: &str = "[0].recorrido";

fn main() {
  /* Read the JSON */

  let input = args().collect::<Vec<String>>();

  if input.len() < 2 {
    println!("No file provided!");
    ()
  }

  let file: File = File::open(input[1].clone()).unwrap(); 

  let reader = BufReader::new(file);

  let json_data: Value = from_reader(reader).unwrap();

  let expression = jmespath::compile(FILTER).unwrap();

  let result = enquire(expression, json_data).unwrap();

  let mut splitted: Vec<&str> = result.as_string().unwrap().rsplit('-').collect();

  splitted.reverse();

  // ** Split
  // ** Traverse - Encode
  // ** Test distance diff

  println!("{:?}", splitted);

  ()
}

/* 
JMESPath Repository: https://github.com/jmespath/jmespath.rs
        Documentation: https://docs.rs/jmespath/latest/jmespath/
*/