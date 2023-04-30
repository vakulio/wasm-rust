use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::{decode, encode};
use image::load_from_memory;

#[wasm_bindgen]

pub fn grayscale(encoded_file: &str) -> String{
    log(&"grayscale".into());

    let base64_to_vector = decode(encoded_file).unwrap();

    let mut img = load_from_memory(&base64_to_vector).unwrap(); 

    img = img.grayscale();

    let mut buffer = vec![];
    img.write_to(&mut buffer, image::ImageOutputFormat::Png).unwrap();


    let encoded_img = encode(&buffer);
    let data_url = format!(
        "data:image/png;base64,{}", encoded_img
    );

    data_url
}