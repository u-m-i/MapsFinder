extern crate jmespath;
use serde_json::{Value, from_reader};
use std::fs::{File};
use std::io::{copy, stdout};

fn enquire(expression: jmespath::Expression, target: Serde ) -> jmespath::Result {
  let own = expression.unwrap();

  return own.search(target);
}

fn main() {
  /* Read the JSON */

  let reader: File = File::open(args[1]).unwrap(); 

  let json_data: Value = serde_json::from_reader(reader).unwrap();

}


/* 
JMESPath Repository: https://github.com/jmespath/jmespath.rs
        Documentation: https://docs.rs/jmespath/latest/jmespath/
*/