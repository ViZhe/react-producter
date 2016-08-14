
import Horizon from '@horizon/client'


const hz = new Horizon()
hz.connect()

export const products = hz('products')
export const optionsTemplates = hz('options_templates')
export const optionsGroups = hz('options_groups')
export const optionsFields = hz('options_fields')
