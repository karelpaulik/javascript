Return response from MS-SQL server as JSON
--///////////////////////////////////////////////////////////
Keyword: FOR JSON PATH vs FOR JSON AUTO
FOR JSON PATH - more control, more work
FOR JSON AUTO - simpler

How to add root object
......................
By using: ROOT (for PATH and AUTO as Well): 
Example: FOR JSON AUTO, ROOT('root_object')
--///////////////////////////////////////////////////////////
FOR JSON PATH

SELECT 
    id_kalk AS 'id_kalk',
    part_nr AS 'part_nr',
    razeni AS 'Tab_kalk_str_bom.razeni',
    level_bom AS 'Tab_kalk_str_bom.level_bom'
FROM MainTable
FOR JSON PATH;

[
  {
    "id_kalk": 1587,
    "part_nr": "10920033",
    "Tab_kalk_str_bom": {
      "razeni": 11,
      "level_bom": "1"
    }
  }
]
--////////////////////////////////////////////////////////////
SELECT 
    id_kalk,
    part_nr,
    razeni,
    level_bom
FROM MainTable
FOR JSON AUTO;

[
  {
    "id_kalk": 1587,
    "part_nr": "10920033",
    "razeni": 11,
    "level_bom": "1"
  }
]
