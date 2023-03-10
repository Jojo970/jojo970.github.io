import numpy as np
import pandas as pd

sorting_file = input('enter name of file: ')
list_of_containers = input('enter name of list: ')

df_main = pd.read_csv(sorting_file)

df_find = pd.read_csv(list_of_containers)

#clean the data frame by dropping duplicates and sorting by value first

df_main.drop_duplicates(subset = ['Container No'], inplace = True)

df_main.sort_values(by = ['Container No'], inplace = True)

df_find.sort_values(by = ['container'], inplace = True)

df_main.dtypes

#find matching rows and skip non-matching rows

n = 0

for x, y in df_find['container'].iteritems():
    new_df = df_main[df_main['Container No'].isin([y])]
    break
    
for x, y in df_find['container'].iteritems():
    check = df_main['Container No'].isin([y])
    if check.any() == True:
        to_append = df_main[df_main['Container No'].isin([y])]
        new_df = new_df.append(to_append)
        
    else:
        n+=1
        new_df = new_df.append(pd.Series(), ignore_index = True)
        new_df.fillna(value = n, inplace =True)
   
new_df['customer/consignee'] = new_df['ID '].astype(str) + "/" + new_df['Consignee'].astype(str)

new_df.columns

real_df = new_df[['RECNO ','Ter ','SSL', 'customer/consignee', 'Container No']]

#make an excel file for easy transfer of data

with pd.ExcelWriter('output.xlsx') as writer:
    real_df.to_excel(writer, sheet_name='Sheet 1')
