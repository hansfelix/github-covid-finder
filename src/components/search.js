import React from 'react'
import { Box, Input, Grid, Select, Label } from 'theme-ui'
import SearchIcon from "../images/icons/search.inline.svg"

import { githubLanguages } from '../data/githubLanguages'

const Search = ({ onSearchChange, onSortChange, onFilterChange }) => {
  return (
    <Grid
      sx={{
        mb: 15
      }}
      columns={[1, 2]}>
      <Box
        sx={{
          width: '100%',
          color: 'white',
          fontFamily: 'inter',
          mb: '10px',
          position: 'relative',
        }}
      >
        <Input
          sx={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: '1px solid transparent',
            borderRadius: 8,
            height: 45,
            fontSize: 16,
            pr: '40px',
            '&:focus': {
              outline: 0
            },
          }}
          onKeyPress={e => (e.key === 'Enter' ? onSearchChange(e) : {})}
          placeholder="Search Covid-19 related repos"
        />

        <SearchIcon style={{
          width: 22,
          height: 22,
          position: 'absolute',
          top: 10,
          right: 10,
        }} />

        <Label
          sx={{
            fontSize: 12,
            display: 'block',
            mt: '10px',
            opacity: '0.8'
          }}
        >
          Press Enter when you are done (GitHub API has a rate limit of<b>&nbsp; 10
          requests per minute </b> &nbsp;if something not working please wait...)
        </Label>

      </Box>
      <Grid
        columns={[2, 2]}
        sx={{
          width: '100%',
          color: 'white',
          fontFamily: 'inter',
          mb: '10px',
        }}
      >
        <Box>
          <Select
            sx={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid transparent',
              borderRadius: 8,
              height: 45,
              fontSize: 16,
              '&:focus': {
                outline: 0
              },
            }}
            defaultValue="stars" onChange={e => onSortChange(e)}>
            <option value="stars">Sort by Stars</option>
            <option value="">Sort by Best Match</option>
            <option value="help-wanted-issues">
              Sort by Help Wanted Issues
            </option>
          </Select>
        </Box>
        <Box>
          <Select
            sx={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid transparent',
              borderRadius: 8,
              height: 45,
              fontSize: 16,
              '&:focus': {
                outline: 0
              },
            }}
            defaultValue="" onChange={e => onFilterChange(e)}>
            <option value="">All Languages</option>
            {githubLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
          </Select>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Search
