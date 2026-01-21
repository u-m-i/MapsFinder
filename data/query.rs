extren crate jmespath;


fn enquire(expression: jmespath::Expression, target: Serde ) -> jmespath::Result {
  let own = expression.unwrap();

  return own.search(target);
}

fn main() {
  /** Buses available hours */

  /** Buses routes card */

  /** Buses routes traverse */
}


/* 
JMESPath Repository: https://github.com/jmespath/jmespath.rs
        Documentation: https://docs.rs/jmespath/latest/jmespath/
*/